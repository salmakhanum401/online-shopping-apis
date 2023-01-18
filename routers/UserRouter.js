const express = require("express");
const{createUsers,getUser, handleSignIn} = require("../controller/UserController")
const UserRouter = express.Router();

UserRouter
.route("/")
.post(createUsers)



UserRouter
.route("/:id")
.get(getUser)

UserRouter
.route("/signIn")
.post(handleSignIn)

module.exports = UserRouter;