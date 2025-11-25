const userModel = require('../models/auth.models');

// --- RGGISTER ---
function Register(req, res) {  
    const { username, password } = req.body;
    const existingUser = userModel.findUser(username);
    if (existingUser) {
        return res.status(409).json({
            success: false,
            message: 'Username already exists' 
        });
    }

    let newUser = { username, password };
    userModel.users.push(newUser);
    res.status(200).json({
        success: true,
        message: 'User registered successfully',
        results: newUser 
    });
 }

//  --- LOGIN ---
function login(req, res) {
    const { username, password } = req.body;
    const user = userModel.findUser(username);
    if (!user || user.password !== password) {
        return res.status(401).json({ 
            success: false,
            message: 'wrong username or password' 
        });
    }

    res.status(200).json({
         success: true,
         message: 'Login succesfully', 
         results: user 
        });
}


module.exports = { login, Register} ; 