import ProgressBar from "../progress-bar/progress-bar.component";

import "./details-modal.styles.scss";

const DetailsModal = ({ projectOverview }) => {
	return (
		<div className="details-modal">
			<div className="details">
				<div className="details-item">
					<h6>$ {projectOverview.projectBacked.toLocaleString()}</h6>
					<p>
						of $ {projectOverview.projectCost.toLocaleString()}{" "}
						backed
					</p>
				</div>
				<div className="details-item">
					<h6>{projectOverview.totalBackers.toLocaleString()}</h6>
					<p>total backers</p>
				</div>
				<div className="details-item">
					<h6>{projectOverview.daysLeft}</h6>
					<p>days left</p>
				</div>
			</div>
			<ProgressBar
				maxValue={projectOverview.projectCost}
				value={projectOverview.projectBacked}
			/>
		</div>
	);
};

export default DetailsModal;
