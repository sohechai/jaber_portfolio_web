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

const ContactPage = () => {
	return (
		<section style={pageContainer}>
			<div style={sectionStyle}>
				<h1>CONTACT PAGE</h1>
			</div>
		</section>
	);
}

export default ContactPage;

export const Head = () => <title>Contact</title>;
