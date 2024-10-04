import React from "react";
import HeaderComponent from "../components/headerComponent";
import Button from "../components/Button";

const ProjectTemplate = ({ pageContext }) => {
	const { title, subtitle, description, images, videos } = pageContext;
	const imageList = images ? Object.values(images) : [];
	const videoList = videos ? Object.values(videos) : [];

	return (
		<section className="page-container">
			<div className="section-style">
				<div className="left-container" style={{ alignItems: 'start' }}>
					<HeaderComponent title={title} subtitle={subtitle} />
					<div className="description-wrapper">
						<p>{description}</p>
					</div>
					<div className="button-wrapper">
						{
							pageContext.githubLink
							&&
							<Button url={pageContext.githubLink} text="GitHub" />
						}
						{
							pageContext.websiteLink
							&&
							<Button url={pageContext.websiteLink} text="Website" />
						}
					</div>
				</div>
				<div className="right-container">
					<div className="image-wrapper">
						{imageList.map((imgSrc, index) => (
							<img key={index} src={imgSrc} alt={title} />
						))}
						{videoList.map((videoSrc, index) => (
							<video key={index} src={videoSrc} autoPlay loop className="video-style" />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProjectTemplate;
