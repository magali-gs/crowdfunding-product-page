import PledgeCard from "../pledge-card/pledge-card.component";
import { ReactComponent as CloseModal } from "../../assets/icon-close-modal.svg";

import "./pledge-modal.styles.scss";

const PledgeModal = ({ options, toggleModal, isChecked, handleCheck }) => {

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
				<div className="pledge-cards">
					{options.map((option, idx) => (
						<PledgeCard
							key={idx}
							name={option.name}
							pledge={option.pledge}
							description={option.description}
							quantity={option.quantity}
							toggleModal={toggleModal}
							isChecked={isChecked}
							handleCheck={handleCheck}
						/>
					))}
				</div>
			</div>
			<div className="overlay"></div>
		</>
	);
};

export default PledgeModal;
