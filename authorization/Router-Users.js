const express = require("express"); 

const Users =  require("./Users-Model.js"); 
const cookieMiddleware = require("../Cookie-Middleware.js"); 

const router = express.Router()

router.get("/", cookieMiddleware, (req, res) => { // localhost:8000/api/users
  console.log("username", req.session.username)
    Users.find() 
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({error: "Internal Server Error 1"})
    })
})


// protected middleware <-----> don't need if I have a cookie 
// function protected(req, res, next) {
//     const { username } = req.headers
//     const { password } = req.headers
  
//     if (username && password) {
//       Users.addId({ username })
//         .first()
//         .then(user => {
//           if (user && bcrypt.compareSync(password, user.password)) {
//             next();
//           } else {
//             res.status(401).json({ message: 'You cannot pass!!' });
//           }
//         })
//         .catch(error => {
//           res.status(500).json(error);
//         });
//     } else {
//       res.status(400).json({ message: 'please provide credentials' });
//     }
//   }


module.exports = router; 