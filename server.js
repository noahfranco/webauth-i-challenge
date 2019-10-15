const express = require("express"); 

const register = require("./authorization/Router-Register.js");
const login =  require("./authorization/Router-Login.js"); 
const users = require("./authorization/Router-Users.js"); 

const server = express();

server.use(express.json())

server.use("/api/register", register )
server.use("/api/login", login)
server.use("/api/users", users)

server.get("/", (req, res) => {
    res.send("Server is running and working")
})

module.exports = server; 