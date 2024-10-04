import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import './style/style.less';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import ProjectTemplate from './templates/projectTemplate.jsx';
import projectsData from './data/projects-data.js';
import Navbar from './components/navbar.jsx';

const pageStyles = {
	display: "flex",
	flexDirection: "column",
	height: "calc(100vh - 32px)",
}

const App = () => {
	return (
		<main style={pageStyles}>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route
					path="/projects/:slug"
					element={<ProjectTemplateWrapper />}
				/>
			</Routes>
		</main>
	);
};

const ProjectTemplateWrapper = () => {
	const { slug } = useParams();
	const project = projectsData.find(
		(project) => project.title.toLowerCase().replace(/\s+/g, "-") === slug
	);

	if (!project) {
		return <div>Projet non trouvé</div>;
	}

	return <ProjectTemplate pageContext={project} />;
};

export default App;
