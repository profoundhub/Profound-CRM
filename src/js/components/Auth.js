var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Auth = React.createClass({
	render: function() {
		return(
            <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-header">

                <header className="mdl-layout__header mdl-color-text--white mdl-color--light-blue-700">
                    <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">
                        <div className="mdl-layout__header-row mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--8-col-desktop">
                            <h3>Profound CRM Authentication</h3>
                        </div>
                    </div>
                </header>

                <main className="mdl-layout__content mdl-color--grey-100">
                    <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">

                        <div className="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-desktop">
                            
                            <div className="mdl-card__title mdl-color--light-blue-600 mdl-color-text--white">
                                <h2 className="mdl-card__title-text">Sign-Up / Log-in / Log-out</h2>
                            </div>

                            <div className="mdl-card__supporting-text mdl-color-text--grey-600">
                                <p>
                                    There are multiple methods available for authentication with Profound CRM. Please Choose one of the Following:
                                </p>                                
                            </div>

                           

                        </div>

                    </div>
                </main>

            </div>
		);
	},

	handleRemove: function(i, j) {
		AppActions.removeContact(i);
	}
});

module.exports = Auth;
