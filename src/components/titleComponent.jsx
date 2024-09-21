// TitleComponent.js
import React from 'react';

const titleContainer = {
	display: 'flex',
	alignItems: 'end',
	// gap: '4px',
	color: 'var(--hero-color)',
};

const titleStyle = {
	fontSize: '2.5rem',
	lineHeight: '2.4rem',
};

const descriptionStyle = {
	fontSize: '16px',
};

const TitleComponent = ({ title, description }) => {
	return (
		<div style={titleContainer} className='title-container'>
			<span style={titleStyle}>{title}</span>
			<span style={descriptionStyle}>{description}</span>
		</div>
	);
};

export default TitleComponent;
