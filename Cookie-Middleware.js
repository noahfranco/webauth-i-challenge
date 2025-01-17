// Cookie Middleware
module.exports = (req, res, next) => {
    if(req.session && req.session.username) {
        next()
    } else {
        res.status(401).json({ errorMessage: "You do not have authorization to pass" })
    }
}