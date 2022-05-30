import style from "../styles/components/paymentButton.module.css";
function PaymentButton({ title, children, color, bgColor }) {
	return (
		<button
			className={style.payment__btn}
			style={{ color, backgroundColor: bgColor }}
		>
			{children}
			<span>{title}</span>
		</button>
	);
}

export default PaymentButton;
