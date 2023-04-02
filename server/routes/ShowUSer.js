const router = require('express').Router();
const {User} = require('../model/Users');

router.get('/',async (req,res)=>{
    try {
        const UserDetail = await User.find();
        return res.status(200).send({
            UserDetail
        })
        res.end()
    } catch (error) {
        res.status(500).send({message:"internal server Error"})
    }
})


module.exports = router;