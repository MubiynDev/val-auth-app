const bcrypt = require("bcrypt");

module.exports.generateHash = async (password) => await bcrypt.hash(password, await bcrypt.genSalt(12));
  

module.exports.compareHash = async (password, hash) => await bcrypt.compare(password, hash); 
