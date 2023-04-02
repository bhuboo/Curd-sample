const router = require("express").Router();
const {User} = require('../model/Users');

router.put('/',async(req,res,)=>{

    const UserDetail ={
        Fullname: req.body.name,
        EmailID: req.body.email,
        Phonenumber: req.body.number,
        Password:req.body.password,
        City:req.body.city,
        Country:req.body.country,
        Status:req.body.status
    }

    const user =await User.findById(req.body.id);
    Object.assign(user,UserDetail)
    user.save();

    return res.status(200).send({message:`User ${user.Fullname} Detail Update Sucessfully`})
})

module.exports = router;