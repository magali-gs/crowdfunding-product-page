import OptionCard from "../option-card/option-card.component";
import "./about-modal.styles.scss";

const AboutModal = ({ options, toggleModal, handleCheck }) => {
	return (
		<div className="about-modal">
			<div className="about-modal__content">
				<h3>About this project</h3>
				<p>
					The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
					platform that elevates your screen to a more comfortable
					viewing height. Placing your monitor at eye level has the
					potential to improve your posture and make you more
					comfortable while at work, helping you stay focused on the
					task at hand.
					<br />
					<br />
					Featuring artisan craftsmanship, the simplicity of design
					creates extra desk space below your computer to allow
					notepads, pens, and USB sticks to be stored under the stand.
				</p>
			</div>
			{options.map(
				(option, idx) =>
					option.pledge && (
						<OptionCard
							key={idx}
							name={option.name}
							pledge={option.pledge}
							description={option.description}
							quantity={option.quantity}
							toggleModal={toggleModal}
							handleCheck={handleCheck}
						/>
					)
			)}
		</div>
	);
};

export default AboutModal;
