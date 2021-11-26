import React, { useState } from "react";
import Header from "../components/header/header.component";
import hero from "../assets/image-hero-desktop.jpg";
import IntroModal from "../components/intro-modal/intro-modal.component";
import DetailsModal from "../components/details-modal/details-modal.component";
import AboutModal from "../components/about-modal/about-modal.component";

import "./homepage.styles.scss";
import projectContent from "../assets/content";

const Homepage = () => {
	const [project, setProject] = useState(projectContent);

	return (
		<div className="homepage">
			<Header />
			<div className="hero">
				<img src={hero} alt="Hero" />
			</div>
			<div className="content-container">
				<IntroModal />
				<DetailsModal projectOverview={project.projectOverview} />
				<AboutModal options={projectContent.options} />
			</div>
		</div>
	);
};

export default Homepage;
