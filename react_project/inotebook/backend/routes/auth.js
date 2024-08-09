const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.post('/createuser',[
    body('name','Enter a valid name').isLength({min : 3}),
    body('email','Enter a valid email').isEmail(),
    body('password','password must be atleast 5 characters').isLength({min : 5}),
] ,(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    // console.log(req.body);
    // const user = User(req.body);
    // user.save();
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(user => res.json(user))
    .catch(err => console.log(err)
    ,res.json({error : 'Please enter a unique value of email'}));
})

router.post('/login',[
    body('email','Enter a valid email').isEmail(),
    body('password','password can not be blank.').exists(),
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const{email, password} = req.body;
    try{
        let user = await user.findOne({email});
        if(!user) {
            return res.status(400).json({error : "please try to login with correct credential."});
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare) {
            return res.status(400).json({error : "please try to login with correct credential."})
        }

        const data = {
            user : {
                is : user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({authToken})

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error..!")
    }
    
})


module.exports = router;
