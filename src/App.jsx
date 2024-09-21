// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './style/style.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './pages/about';
import Contact from './pages/contact';

const pageStyles = {
	display: "flex",
	flexDirection: "column",
	height: "calc(100vh - 32px)",
}

const App = () => {
	return (
		<main style={pageStyles}>
			<Navbar />
			<Routes>
				{/* <Hero /> */}
				<Route path="/" element={<Hero />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</main>
	);
};

export default App;
