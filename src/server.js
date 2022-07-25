const express = require("express");
const fs = require("fs");
const path = require("path");
const { PORT } = require("../config")
const mongoose = require("./modules/mongoose")
const cookieParser = require("cookie-parser")

const server = express();

server.listen(PORT, () => console.log(`server running at http://localhost:${PORT}`));

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "./views"));

server.use(cookieParser())
server.use(express.json());
server.use(express.urlencoded({extended: true}));


mongoose() 

fs.readdir(path.join(__dirname, "routes"), (err, files) => {
    if(!err) {
        files.forEach(file => {
            const routePath = path.join(__dirname, "routes", file)
            const route = require(routePath)
            

            if(route.path && route.router) server.use(route.path, route.router)
        })
    }
})