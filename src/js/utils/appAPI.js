let Firebase = require('firebase');
let AppActions = require('../actions/AppActions');

/*
require("firebase/auth");
require("firebase/database");
*/

var config = {
    apiKey: "AIzaSyBnEzTxUQ7PzL27P77DYE-UX-kc8MFkNT4",
    authDomain: "profoundcrm.firebaseapp.com",
    databaseURL: "https://profoundcrm.firebaseio.com"
};

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
/*

firebase.initializeApp({
  serviceAccount: "path/to/serviceAccountCredentials.json",
  databaseURL: "https://profoundcrm.firebaseio.com"
});
*/

/*
var config = {
    apiKey: "AIzaSyBnEzTxUQ7PzL27P77DYE-UX-kc8MFkNT4",
    authDomain: "profoundcrm.firebaseapp.com",
    databaseURL: "https://profoundcrm.firebaseio.com",
    storageBucket: "profoundcrm.appspot.com",
    messagingSenderId: "235081852006"
};
firebase.initializeApp(config);
*/

module.exports = {
	saveContact: function(contact) {
		this.firebaseRef = firebase.database().ref();
		this.firebaseRef.push({
			contact: contact
		});
},

	getContacts: function(){
		this.firebaseRef = firebase.database().ref();
		this.firebaseRef.once("value", function(snapshot){
			var contacts = [];
			snapshot.forEach(function(childSnapshot){
				var contact = {
					id: childSnapshot.key(),
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