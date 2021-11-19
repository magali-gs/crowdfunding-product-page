import "./custom-buttom.styles.scss";

const CustomButtom = ({ children, ...props }) => (
	<button {...props}>{children}</button>
);

export default CustomButtom;
