const express = require('express')
const router = express.Router()

router.post('/doctorData', (req, res)=>{
    try{
        res.send([global.doctors_list])
    }
    catch(error){
        console.error(error.message);
        res.send("Server Error")
    }
})

module.exports= router;