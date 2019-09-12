//Login Controller

module.exports ={
    login( req, res){
     let name =req.body.name
     let email= req.body.email

     res.json({
         message :`Wellcome ${name} , we will contact with you ${email}`
     })
    },
    register(req,res){
        //Read client data
        //Validation user data
        //check validate user
        //new user object
        //response back with new data

        let {name,email,password,confirmPassword} =req.body
    }
}