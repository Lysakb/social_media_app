const joi = require('joi');
const registerValidator = (req, res, next)=>{
    const user = req.body;

    const schema = joi.object({
        name: joi.string()
            // .alpha()
            .min(3)
            .max(30)
            .required(),
    
        email: joi.string().case('lower')
            .email({ minDomainSegments: 2}).required(),
    
        phone_number: joi.string()
                .pattern(new RegExp('^[0-9]{11}$')).required(),
    
        password: joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        
        confirm_password: joi.ref('password'),
    
        role: joi.string().required()

    
    }
    )
       
    next();
 

    const result = schema.validate(user);
    if (result.error) { 
       return res.status(400).send({
            message: result.error.details[0].message,
        })
    }
   
}



module.exports = registerValidator;