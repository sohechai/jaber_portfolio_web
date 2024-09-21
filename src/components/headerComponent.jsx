import React from 'react';

const HeaderComponent = ({title, subtitle}) => {
	const wrapper = {
		display: 'flex',
		alignItems: 'baseline',
		gap: '8px',
	};

	return (
		<div style={wrapper}>
			<h1>{title}</h1>
			<p>{subtitle}</p>
		</div>
	);
};

export default HeaderComponent;