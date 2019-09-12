const validator = require('validator')

const validate =user =>{
    let error ={}

    if(!user.name){
        error.name ='Please provide your name'
    }
    if(!user.email){
        error.email ='Please provide your Email'
    }else if( !validator.isEmail(user.email)) {
        error.email ='Please provide a valid Eamil'
    }
    if(!user.password){
        error.password ='Please provide a Password'
    }else if(user.password > 6){
        error.password ='Password must be grater or equal 6 charcter'
    }
    if(!user.confirmPassword){
        error.confirmPassword ='Please provide Confermation Password'
    }else if(user.password  ){
        
    }

}