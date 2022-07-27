const LocalStrategy = require('passport-local').Strategy
const bcrypt =

async function initializePassport(passport) {
    const authenticateUser = (username, password, done) => {
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
    passport.use(new LocalStrategy({usernameField:'username'}), authenticateUser)
    passport.serializeUser((user, done) => { })
    passport.deserializeUser((id, done) => { })
}

module.exports = initializePassport