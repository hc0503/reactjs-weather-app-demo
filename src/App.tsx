import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import GlobalStyles from './components/GlobalStyles';
import Container from './components/Container';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './css/weather-icons.min.css';
import './css/weather-icons-wind.min.css';

const App: React.FC = () => {
	return (
		<>
			<GlobalStyles />
			<Container>
				<NavBar />
				<Switch>
					<Route path='' exact>
						<Home />
					</Route>
					<Route path='/home' exact>
						<Home />
					</Route>
					<Route path='*' exact>
						<NotFound />
					</Route>
				</Switch>
				<Footer />
			</Container>
		</>
	);
};

export default App;
