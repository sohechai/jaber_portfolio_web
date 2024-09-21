import * as React from "react";
import Navbar from "../components/navbar";

const pageContainer = {
	display: "flex",
	flexDirection: "column",
	height: "calc(100vh - 32px)",
}

const sectionStyle = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-end',
	border: 'var(--border)',
	marginTop: '8px',
	padding: '24px',
	height: '100%',
}

const AboutPage = () => {
	return (
		<section style={pageContainer}>
			<div style={sectionStyle}>
				<h1>ABOUT PAGE</h1>
			</div>
		</section>
	);
}

export default AboutPage;

export const Head = () => <title>À propos</title>;
