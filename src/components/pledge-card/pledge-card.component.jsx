import CustomButtom from "../custom-buttom/custom-buttom.component";
import "./pledge-card.styles.scss";

const PledgeCard = ({
	name,
	pledge,
	description,
	quantity,
	isChecked,
	handleCheck,
}) => {
	return (
		<div
			className={`pledge-card ${
				(!quantity && pledge ? "disable" : undefined) ||
				(isChecked === name && "selected")
			}`}
		>
			<div className="pledge-card__content">
				<input
					type="radio"
					name="options"
					value={name}
					checked={isChecked === name}
					onChange={() => handleCheck(name)}
					disabled={!quantity && pledge && true}
				/>
				<div className="header">
					<div>
						<div>
							<h6>{name}</h6>
							{pledge && <p>Pledge $ {pledge} or more</p>}
						</div>
						{quantity >= 0 && (
							<h5>
								{quantity} <span>left</span>
							</h5>
						)}
					</div>
					<p>{description}</p>
				</div>
			</div>
			{isChecked === name && (
				<div className={"pledge-card__confirmation"}>
					<p>Enter your pledge</p>
					<div className="info">
						<label>$</label>
						<input
							type="number"
							min={pledge ? pledge : 1}
							defaultValue={pledge ? pledge : 1}
						/>
						<CustomButtom
							className={
								!quantity && pledge ? "disable" : undefined
							}
							disabled={!quantity && pledge && true}
							style={{
								width: "100px",
								height: "48px",
								fontSize: 14,
							}}
						>
							Continue
						</CustomButtom>
					</div>
				</div>
			)}
		</div>
	);
};

export default PledgeCard;
