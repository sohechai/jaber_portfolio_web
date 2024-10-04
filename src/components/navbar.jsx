import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<header className="navbar-container">
			<div className="square" />
			<nav>
				<ul className="list">
					<li className="CVStyle">
						<a
							href="/path/to/CV.pdf"
							download="CV.pdf"
							className="cv-style"
						>
							CV
						</a>
					</li>
					<li>
						<Link to="/" className="link">ACCUEIL</Link>
					</li>
					<li>
						<Link to="/about" className="link">À PROPOS</Link>
					</li>
					<li>
						<Link to="/contact" className="link">CONTACT</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
