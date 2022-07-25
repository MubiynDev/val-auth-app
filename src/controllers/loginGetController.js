module.exports = async (req, res) => {
    try {
      res.render("login", {
        error: ""
      })
    }
    catch (error) {
      res.render("login")
    } 
}