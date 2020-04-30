const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();/*
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
require("dotenv").config();*/

const postsRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");

// app
const app = express();

mongoose
.connect("mongodb+srv://ecommerce:test@123@nodeapi-2sv5v.mongodb.net/nodeapi?w=majority",{
	useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => console.log("DB Connected") )
.catch(() => console.log("DB Server Exception") );

//console.log(process.env);
//console.log("DATABASE name-  "+process.env.DATABASE);

/*mongoose
.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => console.log("DB Connected"))
.catch(() => console.log("DB Server Exception") );*/

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));
/*app.use( (req,res,next) => {
	res.setHeader("Access-Control-Allow-Origin","*");
	res.setHeader("Access-Control-Allow-Headers",
		"Origin,x-Requested-with,Content-Type,Accept");
	res.setHeader("Access-Control-Allow-Methods",
		"GET,POST,PUT,PATCH,DELETE,PUT,OPTIONS");
	next();
});*/
app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);

module.exports = app; 
