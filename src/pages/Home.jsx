import React, { useState, useEffect } from "react";
import TitleComponent from "../components/TitleComponent";
import projectData from "../data/projects-data";
import { useNavigate } from "react-router-dom";

const getHomeContainerStyle = (backgroundImage) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-end',
	border: 'var(--border)',
	marginTop: '8px',
	padding: '24px',
	height: '100%',
	backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
});

const Home = () => {
	const [backgroundImage, setBackgroundImage] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		projectData.forEach(project => {
			const img = new Image();
			img.src = project.mainImage;
		});
	}, []);

	const handleMouseEnter = () => {
		document.documentElement.setAttribute('data-theme', 'dark');
	};

	const handleMouseLeave = () => {
		document.documentElement.setAttribute('data-theme', 'light');
	};

	const handleClick = (slug) => {
		navigate(`/projects/${slug}`);
	};

	const renderProjects = () => {
		return projectData.map((project, index) => {
			const slug = project.title.toLowerCase().replace(/\s+/g, '-');

			return (
				<div
					key={index}
					onMouseEnter={() => {
						setBackgroundImage(project.mainImage);
						handleMouseEnter();
					}}
					onMouseLeave={() => {
						setBackgroundImage(null);
						handleMouseLeave();
					}}
					onClick={() => handleClick(slug)}
					style={{ cursor: 'pointer' }}
				>
					<TitleComponent title={project.title} description={project.subtitle} />
				</div>
			);
		});
	};

	return (
		<section style={getHomeContainerStyle(backgroundImage)} className="home-container">
			<div className="project-container">
				{renderProjects()}
			</div>
			<div className="name-container">
				<svg width="1239" height="auto" viewBox="0 0 1239 286" className="name">
					<path d="M80.8 2.99997V245.4C80.8 270.6 64.4 285.4 41.2 285.4C17.6 285.4 0.799988 270.6 0.799988 245.4V164.6H35.6V245.8C35.6 251.4 37.2 253.8 40.8 253.8C44.4 253.8 46 251.4 46 245.8V2.99997H80.8Z" />
					<path d="M161.462 2.99997L183.462 283H145.462L142.662 213.8H129.862L127.462 283H93.0625L113.862 2.99997H161.462ZM131.062 182.6H141.462L138.262 99.4L136.662 44.2H135.862L134.662 99.4L131.062 182.6Z" />
					<path d="M276.097 40.6V97.4C276.097 118.2 274.097 127.8 260.497 132.6V133.4C274.097 138.2 276.097 147.8 276.097 168.6V245.8C276.097 271.4 262.897 283 236.097 283H196.097V2.99997H236.497C263.297 2.99997 276.097 14.6 276.097 40.6ZM241.297 42.6C241.297 37 240.097 34.6 236.097 34.6H230.897V117.4H236.097C240.097 117.4 241.297 115 241.297 109.4V42.6ZM241.297 156.6C241.297 151 240.097 148.6 236.097 148.6H230.897V251.4H236.097C240.097 251.4 241.297 249.4 241.297 243.8V156.6Z" />
					<path d="M343.178 2.59997V34.2H327.178V123.4H341.178V155H327.178V251.4H345.178V283H292.378V2.59997H343.178Z" />
					<path d="M405.344 164.6C405.344 159 404.144 156.6 400.144 156.6H394.944V283H360.144V2.99997H400.544C427.344 2.99997 440.144 14.6 440.144 40.2V105.4C440.144 126.2 438.144 135.8 424.544 140.6V141.4C438.144 146.2 440.144 155.8 440.144 176.6V246.6C440.144 262.2 440.544 269.8 444.944 282.2V283H409.344C406.544 271.8 405.344 263.4 405.344 246.6V164.6ZM405.344 42.2C405.344 36.6 404.144 34.6 400.144 34.6H394.944V125.4H400.144C404.144 125.4 405.344 123 405.344 117.4V42.2Z" />
					<path d="M579.972 2.59997V283H545.572V159H534.772V283H500.372V2.59997H534.772V127.4H545.572V2.59997H579.972Z" />
					<path d="M647.834 2.59997V34.2H631.834V123.4H645.834V155H631.834V251.4H649.834V283H597.034V2.59997H647.834Z" />
					<path d="M710 40.2C710 34.6 708.4 32.2 704.8 32.2C701.2 32.2 699.6 34.6 699.6 40.2V245.8C699.6 251.4 701.2 253.8 704.8 253.8C708.4 253.8 710 251.4 710 245.8V164.6H744.8V245.4C744.8 270.6 728.4 285.4 705.2 285.4C681.6 285.4 664.8 270.6 664.8 245.4V40.6C664.8 15.8 682 0.599976 705.2 0.599976C728.8 0.599976 744.8 15.4 744.8 40.6V109H710V40.2Z" />
					<path d="M841.862 2.59997V283H807.462V159H796.662V283H762.263V2.59997H796.662V127.4H807.462V2.59997H841.862Z" />
					<path d="M922.525 2.99997L944.525 283H906.525L903.725 213.8H890.925L888.525 283H854.125L874.925 2.99997H922.525ZM892.125 182.6H902.525L899.325 99.4L897.725 44.2H896.925L895.725 99.4L892.125 182.6Z" />
					<path d="M991.959 2.99997V283H957.159V2.99997H991.959Z" />
					<path d="M1054.5 40.2C1054.5 34.6 1052.9 32.2 1049.3 32.2C1045.7 32.2 1044.1 34.6 1044.1 40.2V245.8C1044.1 251.4 1045.7 253.8 1049.3 253.8C1052.9 253.8 1054.5 251.4 1054.5 245.8V164.6H1089.3V245.4C1089.3 270.6 1072.9 285.4 1049.7 285.4C1026.1 285.4 1009.3 270.6 1009.3 245.4V40.6C1009.3 15.8 1026.5 0.599976 1049.7 0.599976C1073.3 0.599976 1089.3 15.4 1089.3 40.6V109H1054.5V40.2Z" />
					<path d="M1186.36 2.59997V283H1151.96V159H1141.16V283H1106.76V2.59997H1141.16V127.4H1151.96V2.59997H1186.36Z" />
					<path d="M1238.23 2.99997V283H1203.42V2.99997H1238.23Z" />
				</svg>
			</div>
		</section>
	);
};

export default Home;
