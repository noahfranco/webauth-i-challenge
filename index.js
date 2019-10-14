const server = require("./server.js")

const PORT = process.env.PORT || 8000

server.listen(port, () => {
    console.log(`\n *** Server is listing on ${port} *** \n`)
})