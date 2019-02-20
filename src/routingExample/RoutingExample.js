import React from "react";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import "./Routing.css";

const RoutingExample = () => (
<Router>
	<div>
		<ul>
			<li>
				<NavLink exact to="/" activeClassName="selected">Home</NavLink>
			</li>
			<li>
				<NavLink exact to="/about"  activeClassName="selected">About</NavLink>
			</li>
			<li>
				<NavLink exact to="/topics" activeClassName="selected">Topics</NavLink>
			</li>
		</ul>
	<hr />

	<Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
	<Route path={process.env.PUBLIC_URL + '/'} component={About} />
	<Route path={process.env.PUBLIC_URL + '/'} component={Topics} />
</div>
</Router>
);

const Home = () => (
<div>
	<h2>Home</h2>
	<h4>This is just Example of routing - route /home matched</h4>
</div>
);

const About = () => (
<div>
	<h2>About</h2>
	<h4>route /about matched route /about matched route /about matched</h4>
</div>
);

const Topics = ({ match }) => (
<div>
	<h2>Topics</h2>
	<ul>
		<li>
		<Link to={`${match.url}/rendering`}>Rendering with React</Link>
		</li>
		<li>
		<Link to={`${match.url}/components`}>Components</Link>
		</li>
		<li>
		<Link to={`${match.url}/props-v-state`}>Props v. State</Link>
		</li>
	</ul>

	<Route path={`${match.url}/:topicId`} component={Topic} />
	<Route
		exact
		path={match.url}
		render={() => <h3>Please select a topic.</h3>}
	/>
</div>
);

const Topic = ({ match }) => (
<div>
	<h3>{match.params.topicId}</h3>
</div>
);

export default RoutingExample;