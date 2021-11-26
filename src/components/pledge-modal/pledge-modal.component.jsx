import OptionCard from "../option-card/option-card.component";
import { ReactComponent as CloseModal } from "../../assets/icon-close-modal.svg";

import "./pledge-modal.styles.scss";

const PledgeModal = ({ toggleModal }) => {
	return (
		<>
			<div className="pledge-modal">
				<CloseModal onClick={toggleModal} className="closeBtn" />
				<div className="content">
					<h3>Back this project</h3>
					<p>
						Want to support us in bringing Mastercraft Bamboo
						Monitor Riser out in the world?
					</p>
				</div>
				{/* {options.map((option, idx) => (
				<OptionCard
					key={idx}
					name={option.name}
					pledge={option.pledge}
					description={option.description}
					quantity={option.quantity}
					toggleModal={toggleModal}
				/>
			))} */}
			</div>
            <div className='overlay'></div>
		</>
	);
};

export default PledgeModal;
