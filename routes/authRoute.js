const express = require("express");
const authController = require("../controllers/authController");

//const authController = require("../controllers/auth")
const passport = require("../middleware/passport");

const router = express.Router();

// localhost:8081/auth/login
router.post("./log_in", (req, res) => {
    passport.authenticate("local", { session: false}, (err, user, info) => {
        console.log(err);
        if (err || ! user) {
            return res.status(400).json({
                message: info ? info.message: "Login Failed"
            });
        }
        req.login(user, { session: false}, (err) => {
            if(err) {
                res.send(err);
            }
            const token = authController.generateToken(user);
            //res.cookie("jwt", token);
            return res.json({user, token});
        })
    })(req, res)
});

module.exports = router;