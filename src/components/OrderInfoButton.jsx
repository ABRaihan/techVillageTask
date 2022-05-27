import style from "../styles/components/orderInfoButton.module.css";
function OrderInfoButton({ title, children }) {
	return (
		<button className={style.button}>
			{children}
			<span>{title}</span>
		</button>
	);
}

export default OrderInfoButton;
