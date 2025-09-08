
const db = require("mongoose")
require("dotenv").config();

const mongoUri = process.env.MONGODB_URI;
db.connect(mongoUri).then(()=>console.log("ok"))



let Poete = db.model("poete",{  
    _id:Number,
    pseudoPoete: {
        type:String,
        default:"pseudo"
    },
    nomPoete:{
        type:String,
        default:"nom"
    },
    prenomPoete:{
        type:String,
        default:"prenom"
    },
})


let Tournoi = db.model("tournoi",{
    _id:Number,
    nomTournoi:String,
    description:String,
    lieuTournoi:String,
    dateTournoi: String,
    nbJury:Number,
    participants:{
        type:Array,
        default:[]
    },
    performances:{
        type: Array,
        default:[
        ]
    }
})

// let Tour = db.model("tour",{
//     _id:Number,
//     idTournoi:String,
//     performances:{
//         type:Array,
//         default:[{
//             idPerfo:1,
//             idPoete:2,
//             duree:"00:03:00",
//             Notes:[]
//         }]
//     }
// })






module.exports = {Tournoi,Poete}