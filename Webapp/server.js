if (process.env.NODE_ENV !== 'production' ) {
    require('dotenv').config()
}

const express =  require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

/* server part 1/2: start */
const initializePassport = require('./pass')
initializePassport(
    passport,
    username => users.find(user => users.username === username),
    role => users.find(user => users.role === role)
)

/* server part 2/2: from here until end */
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.urlencoded({extended:false}))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUnitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

/* GOTO: login page */
app.get('/', checkAuthenticated, (req, res) => {
    res.render("pages/login", { username: req.user.name})
})

/* GOTO: logged in page */
app.get('/main', checkNotAuthenticated, (req, res) => {
    res.render("pages/logged")
})

/* GOTO: decide through authentication */
app.post('/', passport.authenticate('local', {
    successRedirect: '/main',
    failureRedirect: '/',
    failureFlash: true
}))

app.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/')
  })
  
  function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/')
  }
  
  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/main')
    }
    next()
  } /* end server */

  /* hard coded users */
let admina = {username: "admina", password: "password", role: "admin"};
let normalo = {username: "normalo", password: "password", role: "normal"};
let users = [admina, normalo]

/* Function to validate Login Data */
function validateLogin() {
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;
	
    if (username == logged_user.username && password == logged_user.password) {
		alert("Login successfully! Hello " + username);
		currentUser = logged_user;
	    login_user(username);
		initMap();
		viewList();
		return
	}
	else {
		alert("Login failed! Wrong username or password!")
	}
}

/* initialize map */
function initMap() {
    let mapOptions = {
	    center:[52.5170365, 13.3888599],
	    zoom:10.5
    }
    let map = new L.map('map' , mapOptions);
    let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    map.addLayer(layer);
}

/* Function to view the list of contacts */
function viewList() {
    resetList()
    for (let i = 0; i < allContacts()[currentUser['username']].length; i++) {
        viewList(contactBook[currentUser['username']][i], i, currentUser['username'])
    }
}

/* Function to reset the list of contacts */
function resetList() {
    document.getElementById("contactsTable").innerHTML = ""
}

/* Function to show all contacts */
function allContacts() {
	/* Hard coded contacts Admina */
	let contactAdmina1 = {name: "Hermione", surname:"Granger", visibility: "public"}
	L.marker([52.5182718, 13.4078309]).addTo(map).bindPopup(title= "Hermione Granger");

	let contactAdmina2 = {name: "Jay", surname:"Gatsby", visibility: "private"}
	L.marker([52.5015753, 13.3410035 ]).addTo(map).bindPopup(title= "Jay Gatsby");

	/* Hard coded contacts Normalo */
	let contactNormalo1 = {name: "The", surname:"Joker", visibility: "public"}
	L.marker([52.5172851, 13.3524323]).addTo(map).bindPopup(title= "The Joker");

	let contactNormalo2 = {name: "Rick", surname:"Sanchez", visibility: "private"}
	L.marker([52.4744192, 13.4026007]).addTo(map).bindPopup(title="Rick Sanchez");
}

app.listen(3000, () =>{
    console.log("listten on port: 3000")
})