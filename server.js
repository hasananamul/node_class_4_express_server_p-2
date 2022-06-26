const express = require("express");
const {urlencoded, json} = require("express");
const apps = express();
const dotenv = require("dotenv").config();
const PORT = process.env.SERVER_PORT
const colors = require("colors");
const connectionDB = require("./config/mongoDB");



connectionDB()

//Use body data for position: 
apps.use(json())
apps.use(urlencoded({extended : false}))

// Data routing from router folder
apps.use("/students", require("./routes/studentsRouts"))
apps.listen(PORT, () => console.log(` This server is running on ${PORT} server`.america))

