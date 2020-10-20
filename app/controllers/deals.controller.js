const Deal = require("../models/deal.model.js");

exports.findAll = (req, res) =>{
    Deal.getAll((err, data)=>{
        if(err){
            res.status(500).send({
                message: err.message || "Some errors"
            })
        } else{
            res.send(data);
        }
    })
}
