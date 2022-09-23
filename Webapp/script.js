/* Some configs for the map to show up */
let mapOptions = {
	center:[52.5170365, 13.3888599],
	zoom:10.5
}
let map = new L.map('map' , mapOptions);
let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

/* Hard coded Log-in Admina and Normalo */
let admina = {username: "admina", password: "password", role: "admin"};
let normalo = {username: "normalo", password: "password", role: "normal"};
let couple = [admina, normalo]

/* Function to validate Login Data */
function validateLogin() {
	// OLD CODE TO LOGIN:
	let username = document.getElementById("user").value;
	let password = document.getElementById("password").value;

	for (let logged_user of couple) {
	
		if (username == logged_user.username && password == logged_user.password) {
			alert("Login successfully! Hello " + username);
			currentUser = logged_user;
			login_user(username);
			setmap();
			viewList();
			return // return false ??? TODO
		}
		else if(username == normalo.username && password == normalo.password) {
			alert("Login successfully! Hello " + username);
			return
		}
		else {
		alert("Login failed! Wrong username or password!")
		}
	}
	document.getElementById("loginFailed").style.display = "block";
	return false
}

/* Function to view the list of contacts */
function viewList() {
    resetList()
    for (let i = 0; i < contactBook[currentUser['username']].length; i++) {
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