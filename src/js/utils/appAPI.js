let Firebase = require('firebase');
let AppActions = require('../actions/AppActions');

module.exports = {
	saveContact: function(contact) {
		this.firebaseRef = new Firebase('https://profoundcrm.firebaseio.com/profoundcrm');
		this.firebaseRef.push({
			contact: contact
		});
}