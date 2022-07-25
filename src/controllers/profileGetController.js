module.exports = async (req, res) => {
    try {
        res.render("profile", {
            fullName: req.user.fullName,
            login: req.user.login,
        })
    }
    catch(error) {
        console.log(error)
    }
}