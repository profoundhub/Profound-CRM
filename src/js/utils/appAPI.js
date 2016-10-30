let Firebase = require('firebase');
let AppActions = require('../actions/AppActions');

var config = {
    apiKey: "AIzaSyBnEzTxUQ7PzL27P77DYE-UX-kc8MFkNT4",
    authDomain: "profoundcrm.firebaseapp.com",
    databaseURL: "https://profoundcrm.firebaseio.com",            
};

firebase.initializeApp(config);

	// Get Elements
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignUp = document.getElementById("btnSignUp");
    const btnLogOut = document.getElementById("btnLogOut");

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