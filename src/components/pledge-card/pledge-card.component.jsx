import { useState } from "react";
import CustomButtom from "../custom-buttom/custom-buttom.component";
import "./pledge-card.styles.scss";

const PledgeCard = ({
	name,
	pledge,
	description,
	quantity,
	isChecked,
	handleCheck,
	handleUpdateProject,
}) => {
	const [pledgeSelected, setPledgeSelected] = useState({
		value: pledge,
		cause: name,
	});
	const [error, setError] = useState(false);

	const handleChange = (e) => {
		const { value, name } = e.target;
		value < pledge ? setError(true) : setError(false);
		setPledgeSelected({ ...pledgeSelected, [name]: value });
	};
	const handleSubmit = (e) => {
		const { cause, value } = pledgeSelected;
		handleUpdateProject(cause, parseInt(value));
		e.preventDefault();
	};

	return (
		<div
			className={`pledge-card ${
				(!quantity && pledge ? "disable" : undefined) ||
				(isChecked === name && "selected")
			}`}
		>
			<div className="pledge-card__content">
				<input
					id={name}
					type="radio"
					name="options"
					value={name}
					checked={isChecked === name}
					onChange={() => handleCheck(name)}
					disabled={!quantity && pledge && true}
				/>
				<label htmlFor={name} className="pledge-card__content--title">
					{name}
				</label>
				{pledge && (
					<p className="pledge-card__content--value">
						Pledge $ {pledge} or more
					</p>
				)}
				{quantity >= 0 && (
					<h5 className="pledge-card__content--quantity">
						{quantity} <span>left</span>
					</h5>
				)}
				<p className="pledge-card__content--descrip">{description}</p>
			</div>
			{isChecked === name && (
				<div className={"pledge-card__confirmation"}>
					<div className="confirmation-content">
						<p>Enter your pledge</p>
						<div className="info">
							<div>
								<label className={error ? "error" : undefined}>
									$
								</label>
								<input
									className={error ? "error" : undefined}
									type="number"
									min={pledge ? pledge : 1}
									value={
										pledgeSelected.value
											? pledgeSelected.value
											: 1
									}
									name="value"
									onChange={handleChange}
								/>
							</div>
							<CustomButtom
								className={
									(!quantity && pledge) || error
										? "disable"
										: undefined
								}
								disabled={!quantity && pledge && true}
								style={{
									width: "100px",
									height: "48px",
									fontSize: 14,
								}}
								onClick={handleSubmit}
							>
								Continue
							</CustomButtom>
						</div>
					</div>
					{error && (
						<p className="error">
							Please, enter a value greater than {pledge} or
							choose other option
						</p>
					)}
				</div>
			)}
		</div>
	);
};

export default PledgeCard;
