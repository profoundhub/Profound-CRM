var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {

	saveContact: function(contact){
		console.log(contact);
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SAVE_CONTACT,
			contact: contact
		});
	},

	receiveItems: function(items){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.RECEIVE_ITEMS,
			items: items
		});
	}
}

module.exports = AppActions;