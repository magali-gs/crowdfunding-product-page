import { ReactComponent as LogoMasterCraft } from "../../assets/logo-mastercraft.svg";
import CustomButtom from "../custom-buttom/custom-buttom.component";
import "./intro-modal.styles.scss";

const IntroModal = () => (
	<div className="intro-modal">
		<LogoMasterCraft className="logo" />
		<div className="inner-container">
			<div className="content">
				<h2>Mastercraft Bamboo Monitor Rise</h2>
				<p>
					A beautiful & handcrafted monitor stand to reduce nech and
					eye strain.
				</p>
			</div>
			<div className="buttoms">
				<CustomButtom>Back this project</CustomButtom>
				<CustomButtom className='bookmark'><span className='icon'></span>Bookmark</CustomButtom>
			</div>
		</div>
	</div>
);

export default IntroModal;
