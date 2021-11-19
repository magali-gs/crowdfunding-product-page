import React from "react";
import Header from "./header/header.component";
import hero from "./assets/image-hero-desktop.jpg";

import "./homepage.styles.scss";

const Homepage = () => (
	<div className="homepage">
		<Header />
		<div className="hero">
			<img src={hero} alt="Hero" />
		</div>
		<div className="intro-modal">Introduction Modal</div>
		<div className="crownfunding-modal">Crownfunding Modal</div>
		<div className="about-modal">About Modal</div>
	</div>
);

export default Homepage;
