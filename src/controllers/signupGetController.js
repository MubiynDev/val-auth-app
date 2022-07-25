module.exports = async (req, res) => {
    try {
        res.render("signup", {
            error: ""
        })
    }
    catch (error) {
        console.log(error)
    }
}