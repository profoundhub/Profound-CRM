let Firebase = require('firebase');
let AppActions = require('../actions/AppActions');
let myServiceAccount = require('../../../privateFire/serviceAccountCredentials4Daniel.json');

var config = {
    apiKey: "AIzaSyBnEzTxUQ7PzL27P77DYE-UX-kc8MFkNT4",
    authDomain: "profoundcrm.firebaseapp.com",
    databaseURL: "https://profoundcrm.firebaseio.com",
    serviceAccount: "./privateFire/serviceAccountCredentials4Daniel.json"  // myServiceAccount        
};

firebase.initializeApp(config);

 // var firebaseRef = firebase.database().ref();

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
	}
}