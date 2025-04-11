// external imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

// internal imports
const{notFoundHandler, errorHandler} = require("./middlewares/common/errorHandler");


const app = express();
dotenv.config();

// Database Connection
mongoose.connect(process.env.MONGO_CNNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Database Connection Successfull!"))
.catch(err => console.log(err));

// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// set view engine
app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// routig setup


// 404 not found handler
app.use(notFoundHandler);

// common error handler
app.use(errorHandler);


app.listen(process.env.PORT, () => {
  console.log(`app listening to port ${process.env.PORT}`);  
});