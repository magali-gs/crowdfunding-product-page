import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";

import "./header.styles.scss";

const Header = () => (
	<div className="homepage">
		<div className="header">
			<Logo />
			<div className="nav">
				<p className="nav-item">About</p>
				<p className="nav-item">Discover</p>
				<p className="nav-item">Get Start</p>
			</div>
		</div>
	</div>
);

export default Header;
