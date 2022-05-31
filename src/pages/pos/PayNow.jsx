import { useState } from "react";
import CardIcon from "../../assets/icons/CardIcon";
import CashIcon from "../../assets/icons/CashIcon";
import PersonOutline from "../../assets/icons/PersonOutline";
import style from "../../styles/pages/pos/payNow.module.css";
import Card from "./payNow/Card";
function PayNow({ subTotal, othersPrice }) {
	const { tax, shipping, discount } = othersPrice;
	const [activePayOption, setActivePayOption] = useState("card");
	const payOptions = [
		{ name: "Cash", type: "cash", icon: <CashIcon color='#586875' /> },
		{ name: "Card", type: "card", icon: <CardIcon color='#586875' /> },
		{
			name: "On Account",
			type: "account",
			icon: <PersonOutline color='#586875' />
		},
		{ name: "Checque", type: "checque", icon: <CardIcon color='#586875' /> }
	];
	return (
		<section className={style.pay__now}>
			<div className={style.order__amount__bar}>
				<p className={style.order__title}>Order Amount</p>
				<strong className={style.order__price}>
					${(subTotal + tax + shipping - discount).toFixed(2)}
				</strong>
			</div>
			<div className={style.payment__details}>
				<div className={style.payment__options__wrapper}>
					<ul className={style.pay__options}>
						{payOptions.map(({ name, icon, type }) => (
							<li
								key={Math.random()}
								className={`${style.pay__option__item} ${
									activePayOption === type
										? style.active__option
										: ""
								}`}
								onClick={() => setActivePayOption(type)}
							>
								{icon}
								<span className={style.pay__option__name}>
									{name}
								</span>
							</li>
						))}
					</ul>
				</div>
				<div className={style.payment__option__details}>
					<Card />
				</div>
			</div>
		</section>
	);
}

export default PayNow;
