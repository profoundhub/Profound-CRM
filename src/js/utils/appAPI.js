let Firebase = require('firebase');
let AppActions = require('../actions/AppActions');

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBnEzTxUQ7PzL27P77DYE-UX-kc8MFkNT4",
    authDomain: "profoundcrm.firebaseapp.com",
    databaseURL: "https://profoundcrm.firebaseio.com",           
	storageBucket: "profoundcrm.appspot.com",
    messagingSenderId: "235081852006" 
};
firebase.initializeApp(config);



// Get Elements
    const txtEmail 		= document.getElementById("txtEmail");
    const txtPassword 	= document.getElementById("txtPassword");
    const btnLogin 		= document.getElementById("btnLogin");
    const btnSignUp 	= document.getElementById("btnSignUp");
    const btnLogOut 	= document.getElementById("btnLogout");

// Add Log-in Event
    btnLogin.addEventListener('click', e => {
		// Get Email & Password
        const email 	= txtEmail.value;
        const password  = txtPassword.value;
        const auth  	= firebase.auth();
		// Sign-in
        const promise 	= auth.signInWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));
	});

// Add Sign-in Event
    btnSignUp.addEventListener('click', e => {
		// Get Email & Password
		// TODO: Check for Real Emails

        const email 	= txtEmail.value;
        const password  = txtPassword.value;
        const auth  	= firebase.auth();
		// Sign-in
        const promise 	= auth.createUserWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));
	});	

// Add Real-Time Autho. Listener
	firebase.auth().onAuthStateChanged(firebaseUser => {

		// Handle Errors here.
        //	let errorCode = error.code;
		// 	let errorMessage = error.message;
        // [START_EXCLUDE]

		// firebaseUser will be null if not logged in
		if (firebaseUser) {
			console.log(firebaseUser);
		} else {
//			alert(errorMessage);
			console.log('Not Logged In!');
		}
		console.log('firebaseUser: ', firebaseUser); // firebase.User
	});


module.exports = {
	saveContact: function(contact) {
		this.firebaseRef = firebase.database().ref();
		this.firebaseRef.push({
			contact: contact
		});
    },
	getContacts: function() {
		this.firebaseRef = firebase.database().ref();
		this.firebaseRef.once("value", function(snapshot) {
			var contacts = []; // array
			snapshot.forEach(function(childSnapshot) {
				var contact = {
					id: childSnapshot.key,
					name: childSnapshot.val().contact.name,
					phone: childSnapshot.val().contact.phone,
					email: childSnapshot.val().contact.email
				}
				contacts.push(contact);
				AppActions.receiveContacts(contacts);
			});
		});
	},	
	removeContact: function(contactId) {
		this.firebaseRef = firebase.database().ref();
		this.firebaseRef.remove();
	}
}