var express = require('express');
var router = express.Router();
var {Poete} = require("../db_models/models")
var getId = require("../helpers/getId")



router.post('/create',async function(req, res, next) {

         let allPoete = await Poete.find()
          
        let newEntry = req.body
        newEntry._id = getId(allPoete)

        let newPoete = new Poete(req.body)
        newPoete.save().then(data=>{
          console.log(data)
          res.send({status:200,body:data})
        })
});

router.get("/findAll",(req,res,next)=>{
  Poete.find().then(data=>res.send({body:data}))
})

router.post('/update', function(req, res, next) {
  Poete.updateOne({_id:req.body._id},req.body).then(data=>res.send(data))
});


router.get("/findOne/:id",(req,res,next)=>{
  Poete.findOne({_id:req.params.id}).then(data=>res.send({body:data}))
})



router.get("/delete/:id",(req,res,next)=>{
  Poete.deleteOne({_id:req.params.id}).then(data=>res.send({body:data}))
})





module.exports = router;
