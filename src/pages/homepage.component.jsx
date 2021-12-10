import { useState } from "react";
import Header from "../components/header/header.component";
import IntroModal from "../components/intro-modal/intro-modal.component";
import DetailsModal from "../components/details-modal/details-modal.component";
import AboutModal from "../components/about-modal/about-modal.component";
import PledgeModal from "../components/pledge-modal/pledge-modal.component";
import CompleteModal from "../components/complete-modal/complete-modal.component";

import "./homepage.styles.scss";
import projectContent from "../assets/content";

const Homepage = () => {
	const [project, setProject] = useState(projectContent);
	const [modalIsVisible, setModalIsVisible] = useState(false);
	const [completeModalIsVisible, setCompleteModalIsVisible] = useState(false);
	const [isChecked, setIsChecked] = useState("");

	const toggleModal = () => {
		setModalIsVisible(!modalIsVisible);
	};
	const toggleCompleteModal = () => {
		setCompleteModalIsVisible(!completeModalIsVisible);
		setModalIsVisible(false);
	};

	const handleCheck = (e) => {
		setIsChecked(e);
	};

	const handleUpdateProject = (cause, value) => {
		setCompleteModalIsVisible(true);
		setModalIsVisible(false);
		const newProject = { ...project };
		newProject.projectOverview.totalBackers += 1;
		newProject.projectOverview.projectBacked += value;
		newProject.options.forEach((option) => {
			if (option.name === cause) option.quantity -= 1;
		});

		setProject(newProject)
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
					handleUpdateProject={handleUpdateProject}
				/>
			)}
			{completeModalIsVisible && (
				<CompleteModal toggleCompleteModal={toggleCompleteModal} />
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
