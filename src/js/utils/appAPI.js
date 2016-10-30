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