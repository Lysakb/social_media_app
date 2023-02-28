const userModel = require("../models/user");

const userRegister = async(req, res)=>{
    const {name, email, phone_number, password, confirm_password, role} = req.body;
   
    try{
    const newUser = await userModel.create({
        
            name: name ,
            email: email,
            phone_number: phone_number,
            password: password,
            confirm_password: confirm_password,
            role: role
           
    });
       res.status(200).send(newUser);
    } catch(error){
        res.status(400).send(error.message);  
    }
}

module.exports = userRegister; 