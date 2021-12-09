import CustomButtom from "../custom-buttom/custom-buttom.component";
import { ReactComponent as Check } from "../../assets/icon-check.svg";

import "./complete-modal.styles.scss";

const CompleteModal = ({ toggleCompleteModal }) => {
	return (
		<>
			<div className="complete-modal">
				<Check />
				<div className="complete-modal__content">
					<h3>Thanks for your support!</h3>
					<p>
						Your pledge brings us one step closer to sharing
						Mastercraft Bamboo Monitor Riser worldwide. You will get
						an email once our campaign is completed.
					</p>
				</div>
				<CustomButtom onClick={toggleCompleteModal}>
					Got it!
				</CustomButtom>
			</div>
			<div className="overlay"></div>
		</>
	);
};

export default CompleteModal;
