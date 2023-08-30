var express = require('express');
var router = express.Router();
var {Tour} = require("../db_models/models")

/* GET home page. */
router.post('/create', function(req, res, next) {

    new Tour(req.body).save().then(data=>res.send(data))
  
});



router.get("/all",(req,res,next)=>{
  Tour.find().then(data=>{
      
    res.send(data)
    
    
  })
})


// router.get("/participants/:id",(req,res,next)=>{
//   Tournoi.findById(req.params.id).then(data=>{
      
//     Poete.find({_id: {$in:data.participants}}).then(data=>res.send(data))
    
    
//   })
// })

router.post("/update",(req,res)=>{
  Tour.updateOne({_id:req.body._id},req.body).then(data=>res.send(data))
})

module.exports = router;
