import React from "react";
import image from '../images/archi.png';
import Button from "../components/Button";

const ContactPage = () => {
	return (
		<section className="contact-wrapper">
			<div className="contact-left">
				<div className="item1">
					<h1>CONTACTS</h1>
					<div className="item2">
						<Button url="https://www.linkedin.com/in/jaberhe/" text="LINKEDIN" />
						<Button url="https://github.com/jaberhe" text="GITHUB" />
					</div>
				</div>
				{/* <div className="item3" /> */}
			</div>

			<div className="contact-right">
				<h2>SEND ME A MESSAGE</h2>
				<form
					name="contact"
					action="https://formspree.io/f/mqazvrey"
					method="POST"
				>
					<input type="hidden" name="form-name" value="contact" />
					<div className="form-group">
						<input type="text" id="name" name="name" placeholder="name" required />
					</div>
					<div className="form-group">
						<input type="email" id="email" name="email" placeholder="email" required />
					</div>
					<div className="form-group-text-area">
						<textarea id="message" name="message" placeholder="message" required />
					</div>
					<button type="submit" className="form-button">Send</button>
				</form>
			</div>
		</section>
	);
}

export default ContactPage;

export const Head = () => <title>Contact</title>;
