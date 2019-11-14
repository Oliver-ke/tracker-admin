import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './util/setAuthToken';
// import { renderRoutes } from 'react-router-config';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./signin/Signin'));

// const Register = React.lazy(() => import('./views/Pages/Register'));

if (!localStorage.jwtToken || localStorage.jwtToken === undefined) {
	// Set auth token header auth
	// setAuthToken(localStorage.jwtToken);
	// // Decode token and get user info and exp
	// const decoded = jwt_decode(localStorage.jwtToken);
	// // Check for expired token
	// const currentTime = Date.now() / 1000;
	// if (decoded.exp < currentTime) {
	// 	// Redirect to login
	// 	window.location.hash = '/#/login';
	// }

	window.location.hash = '/login';
}

setAuthToken(localStorage.jwtToken);
console.log(localStorage.jwtToken);

class App extends Component {
	render() {
		return (
			<HashRouter>
				<React.Suspense fallback={loading()}>
					<Switch>
						<Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
						<Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
					</Switch>
				</React.Suspense>
			</HashRouter>
		);
	}
}

export default App;
