const express = require("express"); 
const bcrypt = require('bcryptjs');
const cors = require('cors');

const Users =  require("./Users-Model.js"); 

const router = express.Router()

router.post("/", (req, res) => { // localhost:8000/api/login
    const username = req.body
    const password = req.body

    if(!username && !password) {
        res.status(401).json({ error: "Wrong password or username" })
    } else {
        Users.addId({ username })
        .first()
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)) {
                res.status(200).json({ message: `Welcome ${user.username}` })   
            } else {
                res.status(400).json({ error: "please provide credentials"})
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: "Internal Server Error"})
        })
    }
})

// protected middleware 

module.exports = router; 