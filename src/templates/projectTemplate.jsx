import React from "react";
import Navbar from "../components/navbar";
import HeaderComponent from "../components/headerComponent";

const pageContainer = {
	display: "flex",
	flexDirection: "column",
	height: "calc(100vh - 32px)",
};

const sectionStyle = {
	display: 'flex',
	flex: '1',
	overflow: 'hidden', 
	marginTop: '8px',
};

const leftContainer = {
	flex: '0.5',
	border: 'var(--border)',
	padding: '54px',
};

const rightcontainer = {
	flex: '1',
	border: 'var(--border)',
	overflowY: 'auto',
};

const blockWrapper = {
	display: 'flex',
	flexDirection: 'column',
	gap: '16px',
	marginTop: '54px',
	textTransform: 'uppercase',
};

const imageWrapper = {
	display: 'flex',
	flexDirection: 'column',
	margin: '8px',
	gap: '8px',
};

const ProjectTemplate = ({ pageContext }) => {
	const { title, subtitle, description, images } = pageContext;
	console.log('title = ', title);
	console.log('subtitle = ', subtitle);
	console.log('description = ', description);
	console.log('images = ', images);

	const imageList = images ? Object.values(images) : [];

	return (
		<section style={pageContainer}>
			<div style={sectionStyle}>
				<div style={leftContainer}>
					<HeaderComponent title={title} subtitle={subtitle} />
					<div style={blockWrapper}>
						<p>{description}</p>
					</div>
				</div>
				<div style={rightcontainer}>
					<div style={imageWrapper}>
					{imageList.map((imgSrc, index) => (
						<img key={index} src={imgSrc} alt={title} />
					))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProjectTemplate;

