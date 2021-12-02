import CustomButtom from "../custom-buttom/custom-buttom.component";
import "./option-card.styles.scss";

const OptionCard = ({ name, pledge, description, quantity, toggleModal, handleCheck }) => {
	return (
		<div className={`card ${!quantity ? "disable" : undefined}`}>
			<div className="card-header content">
				<h6>{name}</h6>
				<p>Pledge $ {pledge} or more</p>
			</div>
			<p>{description}</p>
			<div className="card-details content">
				<h5>
					{quantity} <span>left</span>
				</h5>
				<CustomButtom
					onClick={() => {toggleModal(); handleCheck(name)}}
					className={!quantity ? "disable" : undefined}
					disabled={!quantity && true}
				>
					{quantity ? "Select Reward" : "Out of stock"}
				</CustomButtom>
			</div>
		</div>
	);
};

export default OptionCard;
