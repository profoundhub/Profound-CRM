var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var AddForm = require('./AddForm.js');
var ContactList = require('./ContactList.js');
var Auth = require('./Auth.js');

function getAppState(){
	return {
		contacts: AppStore.getContacts()
	}
}

// Add Log-in Event
    btnLogin.addEventListener('click', e => {
		// Get Email & Password
        const email = txtEmail.value;
        const pass  = txtPassword.value;
        const auth  = firebase.auth();
		// Sign-in
        const promise = auth.signInWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));
	});

// Add Sign-in Event
    btnSignup.addEventListener('click', e => {
		// Get Email & Password
		// TODO: Check for Real Emails

        const email = txtEmail.value;
        const pass  = txtPassword.value;
        const auth  = firebase.auth();
		// Sign-in
        const promise = auth.createUserWithEmailAndPassword(email, password);
        promise
			.then(user => console.log(user))
			.catch(e => console.log(e.message));
	});	

// Add Real-Time Autho.
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if (firebaseUser) {
			console.log(firebase.User);
		} else {
			console.log('Not Logged In!');
		}
	});

var App = React.createClass({
	getInitialState: function() {
		return getAppState();
	},

	componentDidMount: function() {
		AppStore.addChangeListener(this._onChange);
	},

	componentUnmount: function() {
		AppStore.removeChangeListener(this._onChange);
	},

	render: function() {
	//	console.log(this.state.contacts);
		return(
			<div>				 
				<AddForm />
				<ContactList contacts={ this.state.contacts } />
				<Auth />
			</div>
		);
	},

	// Update view state when change is received
	_onChange: function() {
		this.setState(getAppState());
	}
});

module.exports = App;
