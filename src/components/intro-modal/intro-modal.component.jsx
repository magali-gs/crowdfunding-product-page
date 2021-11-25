import { useState } from "react";

import { ReactComponent as LogoMasterCraft } from "../../assets/logo-mastercraft.svg";
import { ReactComponent as Bookmark } from "../../assets/icon-bookmark.svg";
import CustomButtom from "../custom-buttom/custom-buttom.component";

import "./intro-modal.styles.scss";

const IntroModal = () => {
	const [bookmarked, setBookmarked] = useState("false");

	const handleClick = () => {
		setBookmarked(!bookmarked);
	};

	return (
		<div className="intro-modal">
			<LogoMasterCraft className="logo" />
			<div className="inner-container">
				<div className="content">
					<h2>Mastercraft Bamboo Monitor Rise</h2>
					<p>
						A beautiful & handcrafted monitor stand to reduce nech
						and eye strain.
					</p>
				</div>
				<div className="buttoms">
					<CustomButtom>Back this project</CustomButtom>
					<CustomButtom
						className={`bookmark ${
							!bookmarked ? "bookmarked" : ""
						}`}
						onClick={handleClick}
					>
						<Bookmark className="icon" />
						{!bookmarked ? "Bookmarked" : "Bookmark"}
					</CustomButtom>
				</div>
			</div>
		</div>
	);
};

export default IntroModal;
