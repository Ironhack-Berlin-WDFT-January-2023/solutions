function isLoggedIn (req, res, next) {
    if (!req.session.user) {
        return res.redirect("/login")
    } else {
        next()
    }
}

module.exports = { isLoggedIn }