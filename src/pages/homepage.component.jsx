import React from "react";
import Header from "../components/header/header.component";
import IntroModal from "../components/intro-modal/intro-modal.component";
import hero from "../assets/image-hero-desktop.jpg";

import "./homepage.styles.scss";

const Homepage = () => (
	<div className="homepage">
		<Header />
		<div className="hero">
			<img src={hero} alt="Hero" />
		</div>
		<div className="content-container">
			<IntroModal />
			<div className="crownfunding-modal">Crownfunding Modal</div>
			<div className="about-modal">About Modal</div>
		</div>
	</div>
);

export default Homepage;
