const router = require("express").Router()
const { isLoggedIn } = require("../middleware/route-guard")

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index")
})

router.get("/main", isLoggedIn, (req, res, next) => {
  const loggedInUser = req.session.user
  res.render("main", { user: loggedInUser })
})

router.get("/private", isLoggedIn, (req, res, next) => {
  const loggedInUser = req.session.user
  res.render("private", { user: loggedInUser })
})

module.exports = router
