const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

function initialize(passport, getUserByName, getUserById) {
    const authenticateUser = async (username, password, done) => {
        const user = getUserByName(username)
        if (user == null) {
            return done(null, false, {message: 'Wrong username or password!'})
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                return(null, false, {message: 'Wrong username or password!'})
            }
            
        } catch (e) {
            return done(e)
        }
    }

    passport.use(
        new LocalStrategy({
            usernameField:'username'}, authenticateUser
        ))
    passport.serializeUser((user, done) => done(null, user.role))
    passport.deserializeUser((role, done) => {
        return done(null, getUserById(role))
    })
}

module.exports = initialize