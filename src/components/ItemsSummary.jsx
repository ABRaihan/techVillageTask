import style from "../styles/components/itemsSummary.module.css";
function ItemsSummary({ subTotal }) {
	const othersPrice = {
		tax: 25.5,
		shipping: 5.5,
		discount: 10
	};
	return (
		<div className={style.wrapper}>
			<div className={style.summary__wrapper}>
				<p className={style.summary__title__wrapper}>
					<span className={style.summary__title}>Sub Total</span>
					<span>${subTotal.toFixed(2)}</span>
				</p>
				<p className={style.summary__title__wrapper}>
					<span className={style.summary__title}>TAX</span>
					<span>${othersPrice.tax}</span>
				</p>
				<p className={style.summary__title__wrapper}>
					<span className={style.summary__title}>Shipping</span>
					<span>${othersPrice.shipping}</span>
				</p>
				<p className={style.summary__title__wrapper}>
					<span
						className={[
							style.summary__title,
							style.summary__discount
						].join(" ")}
					>
						Discount on Cart
					</span>
					<span>${othersPrice.discount}</span>
				</p>
			</div>
			<div className={style.total__price__wrapper}>
				<p>Products Count</p>
				<p className={style.total__price}>
					<span>Total</span>
					<strong>
						$
						{(
							subTotal +
							othersPrice.tax +
							othersPrice.shipping -
							othersPrice.discount
						).toFixed(2)}
					</strong>
				</p>
			</div>
		</div>
	);
}

export default ItemsSummary;
