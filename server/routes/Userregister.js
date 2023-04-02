const router = require("express").Router();
const {User} = require('../model/Users');


router.post('/',async(req,res,)=>{

    const UserDetail ={
        Fullname: req.body.name,
        EmailID: req.body.email,
        Phonenumber: req.body.number,
        Password:req.body.password,
        City:req.body.city,
        Country:req.body.country,
        Status:req.body.status
    }

    let AUser = await User.findOne({ EmailID: UserDetail.EmailID });

    if (AUser) return res.status(400).send("Already User update");

    let Amob = await User.findOne({ Phonenumber: UserDetail.Phonenumber });

    if(Amob)  return res.status(400).send("Already Use mobile number");

    AUser = new User(UserDetail);

    valid = await AUser.save();

    if(valid) return res.status(200).send({message:"User Detail Added Sucessfully"})

    res.end()
})

module.exports = router;