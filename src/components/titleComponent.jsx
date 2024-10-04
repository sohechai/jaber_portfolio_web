import React from 'react';

const TitleComponent = ({ title, description }) => {
	return (
		<div className='title-container'>
			<span className='title-style'>{title}</span>
			<span className='description-style'>{description}</span>
		</div>
	);
};

export default TitleComponent;
