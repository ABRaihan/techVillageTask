import { useContext } from "react";
import HighlightOffIcon from "../../../assets/icons/HighlightOffIcon";
import PaymentIcon from "../../../assets/icons/PaymentIcon";
import Input from "../../../components/Input";
import PaymentButton from "../../../components/PaymentButton";
import { Context } from "../../../context/store";
import style from "../../../styles/pages/pos/payNow/card.module.css";
function Card() {
	const { actions } = useContext(Context);
	return (
		<div className={style.wrapper}>
			<form className={style.input__wrapper}>
				<Input type='text' placeholder='Card Name' />
				<Input type='text' placeholder='Card Number' />
				<Input type='text' placeholder='Card Expire Date' />
				<Input type='text' placeholder='Card Screet' />
			</form>
			<div className={style.btn__wrapper}>
				<PaymentButton
					title='Cancel'
					bgColor='#F9D9D8'
					color='#E0514F'
					clickHandler={() => actions.setPayNowShow(false)}
				>
					<HighlightOffIcon color='#E0514F' />
				</PaymentButton>
				<PaymentButton
					title='Complete Payment'
					bgColor='#2F6CCF'
					color='#fff'
				>
					<PaymentIcon color='#fff' />
				</PaymentButton>
			</div>
		</div>
	);
}

export default Card;
