const router = require('express').Router()

const {login} =require('../controllers/userController')

//Registration Route
//localhost:4000/api/users/register

router.post('/register',(req, res) =>{

})
//Login Router
router.post('/login' ,login)
module.exports =router 