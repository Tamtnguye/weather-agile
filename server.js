const express = require("express");
const dotenv = require("dotenv").config();

const PORT = process.env.port || 8081;

// TODO
// const config = require("./conf");
const passport = require("./middleware/passport");
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");

// Create express server
const app = express();


//when server loads should be a redirect to login
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
    res.redirect("/log_in.html")
});
// Middleware for express

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Initialize Passport
app.use(passport.initialize());

app.use("/auth", authRoute);
app.use("/user", passport.authenticate("jwt", { session: false}), userRoute);
// TODO add user route


app.listen(PORT, () => {
    console.log("server has started!");
});