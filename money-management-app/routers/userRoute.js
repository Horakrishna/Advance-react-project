const router = require('express').Router()

//Registration Route
//localhost:4000/api/users/register

router.post('/register',(req, res) =>{

})
//Login Router
router.post('/login' ,(req, res) =>{
    let name =req.body.name
    let email=req.body.email
   res.json({
       message :`Hello ${name}, We will contact with you by ${email}`
   }) 
})
module.exports =router 