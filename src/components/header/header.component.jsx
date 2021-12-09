import { useState } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Menu } from "../../assets/icon-hamburger.svg";
import { ReactComponent as CloseMneu } from "../../assets/icon-close-menu.svg";

import "./header.styles.scss";

const Header = () => {
	const [menuVisible, setMenuVisivle] = useState(false);

	const toggleMobileMenu = () => {
		setMenuVisivle(!menuVisible);
	};

	return (
		<>
			<div className="hero">
				<div className="header">
					<Logo />
					<div className="nav-desktop">
						<p className="nav-desktop--item">About</p>
						<p className="nav-desktop--item">Discover</p>
						<p className="nav-desktop--item">Get Start</p>
					</div>
					<div className="nav-mobile">
						{!menuVisible ? (
							<Menu
								className="nav-mobile__icon"
								onClick={toggleMobileMenu}
							/>
						) : (
							<CloseMneu
								className="nav-mobile__icon"
								onClick={toggleMobileMenu}
							/>
						)}
					</div>
				</div>
				{menuVisible && (
					<div className="nav-mobile__items">
						<p
							className="nav-mobile__items--item"
							onClick={toggleMobileMenu}
						>
							About
						</p>
						<p
							className="nav-mobile__items--item"
							onClick={toggleMobileMenu}
						>
							Discover
						</p>
						<p
							className="nav-mobile__items--item"
							onClick={toggleMobileMenu}
						>
							Get Start
						</p>
					</div>
				)}
			</div>
			{menuVisible && <div className="nav-mobile__overlay"></div>}
		</>
	);
};

export default Header;
