import "./progress-bar.styles.scss";

const ProgressBar = ({ value, maxValue }) => {
	const percentage = (value * 100) / maxValue;
	const width = percentage <= 0 ? `${1}%` : `${percentage}%`;
	
	return (
		<div className="progress-bar">
			<div className="filler" style={{ width: width }}></div>
		</div>
	);
};

export default ProgressBar;
