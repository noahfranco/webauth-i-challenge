const express = require("express"); 
// importing cookies below
const sessions = require("express-session");
// Importing cookies above 

const register = require("./authorization/Router-Register.js");
const login =  require("./authorization/Router-Login.js"); 
const users = require("./authorization/Router-Users.js"); 

const server = express();

// Cookies below AKA Globe middleware
const sessionsConfig = {
    name: "yesSir!",
    secret: "It's important to keep this a secret", 
    cookie: {
        httpOnly: true, 
        maxAge: 1000 * 60 * 60,
        secure: false
    },
    reSave: false,
    saveUninitialized: true
}
// Cookies above

// assigning cookies below 
server.use(sessions(sessionsConfig))
// assigning cookies above 

server.use(express.json())

server.use("/api/register", register )
server.use("/api/login", login)
server.use("/api/users", users)

server.get("/", (req, res) => {
    res.send("Server is running and working")
})

module.exports = server; 