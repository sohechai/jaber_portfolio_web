import React from 'react';
import { Link } from 'react-router-dom';

const navbarContainer = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '24px',
	border: 'var(--border)',
};

const square = {
	width: '20px',
	height: '20px',
	backgroundColor: 'var(--color-dark-gray)',
};

const list = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	listStyle: 'none',
	margin: 0,
	gap: '2rem',
};

const CVStyle = {
	backgroundColor: 'var(--color-green)',
	padding: '8px 16px',
	borderRadius: '16px',
	color: 'var(--color-light-gray)',
};

const Navbar = () => {
	return (
		<nav style={navbarContainer}>
			<div style={square} />
			<ul style={list}>
				<li style={CVStyle}>
					<a
						href="/path/to/CV.pdf" 
						download="CV.pdf"
						style={CVStyle}
					>
						CV
					</a>
				</li>
				<li>
					<Link to="/" style={{ textDecoration: 'none' }}>ACCUEIL</Link>
				</li>
				<li>
					<Link to="/about" style={{ textDecoration: 'none' }}>À PROPOS</Link>
				</li>
				<li>
					<Link to="/contact" style={{ textDecoration: 'none' }}>CONTACT</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
