const express = require("express"); 

const server = express()

server.use(express.json())

server.use("/api/register", )
server.use("/api/login", )
server.use("/api/users")

server.get("/", (req, res) => {
    res.send("Server is running and working")
})

module.exports = server; 