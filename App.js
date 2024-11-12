const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const cors = require("cors");

const express = require("express");

//Routers
const Router = require("./Router");

const App = express();
App.use(express.json());
App.use(express.urlencoded({ extended: true }));
App.use(cors());

// Router Mounting
App.use("/socio/api/", Router);

// Export the app
module.exports = App;
