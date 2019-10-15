const express = require("express"); 
const bcrypt = require('bcryptjs');
const cors = require('cors');

const Users =  require("./Users-Model.js"); 

const router = express.Router()

router.get("/", protected, (req, res) => { // localhost:8000/api/users
    Users.find() 
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({error: "Internal Server Error"})
    })
})

// protected middleware 
function protected(req, res, next) {
    const username = req.body.username
    const password = req.body.password

    if(!username && !password) {
        res.status(401).json({error: "Wrong password or username"})
    } else {
        Users.findById({ username })
        .then(response => {
        if(response && bcrypt.compareSync(password, user.password)) {
            next()
            } else {
                res.status(400).json({error: "please provide credentials"})
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({error: "Internal Server Error"})
        })
    }
}


module.exports = router; 