import style from "../styles/components/paymentButton.module.css";
function PaymentButton({ title, children, color, bgColor, clickHandler }) {
	return (
		<button
			className={style.payment__btn}
			style={{ color, backgroundColor: bgColor }}
			onClick={clickHandler}
		>
			{children}
			<span>{title}</span>
		</button>
	);
}

export default PaymentButton;
