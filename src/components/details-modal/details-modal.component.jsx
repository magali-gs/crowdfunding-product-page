import ProgressBar from "../progress-bar/progress-bar.component";

import "./details-modal.styles.scss";

const DetailsModal = ({ projectOverview }) => {
	return (
		<div className="details-modal">
			<div className="details">
				<div className="details-item">
					<p>$ {projectOverview.projectBacked.toLocaleString()}</p>
					<p>
						of $ {projectOverview.projectCost.toLocaleString()} backed
					</p>
				</div>
				<div className="details-item">
					<p>$ {projectOverview.totalBackers.toLocaleString()}</p>
					<p>total backers</p>
				</div>
				<div className="details-item">
					<p>{projectOverview.daysLeft}</p>
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
