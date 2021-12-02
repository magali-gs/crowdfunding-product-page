import React, { useState } from "react";
import Header from "../components/header/header.component";
import IntroModal from "../components/intro-modal/intro-modal.component";
import DetailsModal from "../components/details-modal/details-modal.component";
import AboutModal from "../components/about-modal/about-modal.component";
import PledgeModal from "../components/pledge-modal/pledge-modal.component";

import "./homepage.styles.scss";
import projectContent from "../assets/content";

const Homepage = () => {
	const [project] = useState(projectContent);
	const [modalIsVisible, setModalIsVisible] = useState(false);
	const [isChecked, setIsChecked] = useState("");

	const toggleModal = () => {
		setModalIsVisible(!modalIsVisible);
	};

	const handleCheck = (e) => {
		setIsChecked(e)
	};

	return (
		<div className="homepage">
			<Header />
			{modalIsVisible && (
				<PledgeModal
					options={projectContent.options}
					toggleModal={toggleModal}
					isChecked={isChecked}
					handleCheck={handleCheck}
				/>
			)}
			<div className="content-container">
				<IntroModal toggleModal={toggleModal} />
				<DetailsModal projectOverview={project.projectOverview} />
				<AboutModal
					options={projectContent.options}
					toggleModal={toggleModal}
					handleCheck={handleCheck}
				/>
			</div>
		</div>
	);
};

export default Homepage;
