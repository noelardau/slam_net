var express = require('express');
var router = express.Router();
var {Tournoi,Poete} = require("../db_models/models")
let getId = require("../helpers/getId")



/* GET home page. */
router.post('/create',async function(req, res){

    let entry = req.body
    entry._id = getId(await Tournoi.find())

    new Tournoi(entry).save().then(data=>res.send(data))
  
});


router.get("/get/:idTournoi",(req,res)=>{

  Tournoi.findById(req.params.idTournoi).then(data=>{
    res.send(data)
  })

})

router.get("/delete/:idTournoi",(req,res)=>{

  Tournoi.deleteOne({_id:req.params.idTournoi}).then(data=>res.send({body:data}))

})

router.get("/all",(req,res,next)=>{
  Tournoi.find().then(data=>{
      
    res.send(data)
    
    
  })
})


router.get("/participants/:id", async (req,res,next)=>{
    let tournoi = await Tournoi.findById(req.params.id)

    let participants = await Poete.find({_id: tournoi.participants})

    res.send(participants)
  
})

router.post("/update",(req,res)=>{
  Tournoi.updateOne({_id:req.body._id},req.body).then(data=>res.send(data))
})


module.exports = router;
