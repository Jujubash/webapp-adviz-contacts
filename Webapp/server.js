if (process.env.NODE_ENV !== 'production' ) {
    require('dotenv').config()
}

const express =  require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const flash = require('express-session')

const users = []

const initializePassport = require('./pass.js')
const { session } = require('passport')
initializePassport(
    passport,
    username => users.find(user => user.username === username)
)

app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname + '/'))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUnitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.get('/main', (req, res) => {
    res.render('pages/logged.ejs')
})

app.get('/', (req, res) => {
    res.render('pages/login.ejs')
})

app.post('/', passport.authenticate('local', {
    successRedirect: '/main',
    failureRedirect: '/',
    failureFlash: true
}))

app.listen(3000)