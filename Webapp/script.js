/* Some configs for the map to show up */
let mapOptions = {
	center:[52.5170365, 13.3888599],
	zoom:10.5
}
let map = new L.map('map' , mapOptions);
let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

/* Hard coded addresses */
/*
L.marker([52.52012, 13.36912]).addTo(map).bindPopup(title="Angela Dorothea Merkel");
L.marker([52.51018, 13.36965]).addTo(map).bindPopup(title="Antonello Manacorda");
L.marker([52.5358, 13.39193]).addTo(map).bindPopup(title="Gustav Sabac el Cher");
L.marker([52.45581, 13.52414]).addTo(map).bindPopup(title="Júlia Vetter");
L.marker([52.45583, 13.52313]).addTo(map).bindPopup(title="Darlyn Strohschein");
*/

/* Hard coded Log-in Admina and Normalo */
let admina = {username: "admina", password: "password", role: "admin"}
let normalo = {username: "normalo", password: "password", role: "normal"}

/* Function to validate Login Data */
function validateLogin() {

	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;

	if (username == admina.username && password == admina.password) {
    alert("Login successfully! Hello " + username);
    return
  }else if(username == normalo.username && password == normalo.password) {
    alert("Login successfully! Hello " + username);
    return
  }else{
		alert("Login failed! Wrong username or password!")
	}
}

/* Function to show Normalo contacts */
function myContacts() {
	if (role = 'admina') {
		/* Hard coded contacts Admina */
		let contactAdmina1 = {name: "Hermione", surname:"Granger", visibility: "public"}
		L.marker([52.5182718, 13.4078309]).addTo(map).bindPopup(title= "Hermione Granger");

		let contactAdmina2 = {name: "Jay", surname:"Gatsby", visibility: "private"}
		L.marker([52.5015753, 13.3410035 ]).addTo(map).bindPopup(title= "Jay Gatsby");
	}

	else if (role = 'normalo') {
		/* Hard coded contacts Normalo */
		let contactNormalo1 = {name: "The", surname:"Joker", visibility: "public"}
		L.marker([52.5172851, 13.3524323]).addTo(map).bindPopup(title= "The Joker");

		let contactNormalo2 = {name: "Rick", surname:"Sanchez", visibility: "private"}
		L.marker([52.4744192, 13.4026007]).addTo(map).bindPopup(title="Rick Sanchez");
	}

	else {
	}
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