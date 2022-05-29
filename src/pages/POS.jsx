import { useState } from "react";
import CustomerInfo from "../components/CustomerInfo";
import ItemsSummary from "../components/ItemsSummary";
import ItemTable from "../components/ItemTable";
import style from "../styles/pages/pos.module.css";

function POS() {
	const [items, setItems] = useState([
		{
			id: 1,
			name: "Pure White & Black Sleeve",
			unitPrice: "91.00",
			quantity: 1
		},
		{
			id: 2,
			name: "Levi's Red Tab Florence",
			unitPrice: "45.00",
			quantity: 2
		},
		{
			id: 3,
			name: "Black & Curve Cooler",
			unitPrice: "115.00",
			quantity: 3
		},
		{ id: 4, name: "Navi Blue", unitPrice: "91.00", quantity: 2 }
	]);
	const subTotal = items.reduce(
		(prev, curr) => prev + curr.unitPrice * curr.quantity,
		0
	);
	return (
		<section>
			<div className='container'>
				<div className={style.items__cart__wrapper}>
					<CustomerInfo />
					<ItemTable items={items} setItems={setItems} />
					<ItemsSummary subTotal={subTotal} />
				</div>
				<div className={style.items__gallery__wrapper}></div>
			</div>
		</section>
	);
}

export default POS;
