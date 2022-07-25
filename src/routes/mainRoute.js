const mainGetController = require("../controllers/mainGetController")
const signupGetController = require("../controllers/signupGetController");
const signupPostController = require("../controllers/signupPostController");
const loginGetController = require("../controllers/loginGetController");
const profileGetController = require("../controllers/profileGetController");
const authMiddleware = require("../middlewares/authMiddleware");
const loginPostController = require("../controllers/loginPostController");



const router = require("express").Router();

router.get("/", mainGetController)
router.get("/signup", signupGetController)
router.get("/login", loginGetController)

router.post("/login", loginPostController)
router.post("/signup", signupPostController)

router.get("/profile", authMiddleware, profileGetController)
router.get("/logout", async (req, res) => {
    res.clearCookie("token").redirect("/")
})

module.exports = {
    path: "/",
    router
}