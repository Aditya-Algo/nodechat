const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

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