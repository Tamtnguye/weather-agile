const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const userController = require("../controllers/userController");

const localLogin = new LocalStrategy(
    {
        usernameField: "email",
        passwordField: "password",
        session: false
    }, (email, password, done) => {
        const user = userController.getUserByEmailIdAndPassword(email, password);
        return user 
        ? done(null, user)
        : done(null, false, {
            error: "Your login details are not valid. Please try again"
        })
    }
)

const jwtLogin = new JwtStrategy(
    {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT // TODO: use dotenv to hide secret
    },
    (payload, done) => {
        const user = userController.getUserById(payload.id);
        return user
        ? done(null, user)
        : done(null, false, {
            error: "Your login details are not valid. Please try again"
        });
    }
);

module.exports = passport.use(localLogin).use(jwtLogin);