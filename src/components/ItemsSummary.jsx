import style from "../styles/components/itemsSummary.module.css";
function ItemsSummary({ subTotal, productCount, othersPrice }) {
	return (
		<div className={style.wrapper}>
			<div className={style.summary__wrapper}>
				<p className={style.summary__title__wrapper}>
					<span className={style.summary__title}>Sub Total</span>
					<span className={style.other__price}>${subTotal.toFixed(2)}</span>
				</p>
				<p className={style.summary__title__wrapper}>
					<span className={style.summary__title}>TAX</span>
					<span className={style.other__price}>${othersPrice.tax}</span>
				</p>
				<p className={style.summary__title__wrapper}>
					<span className={style.summary__title}>Shipping</span>
					<span className={style.other__price}>${othersPrice.shipping}</span>
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
					<span className={style.other__price}>${othersPrice.discount}</span>
				</p>
			</div>
			<div className={style.total__price__wrapper}>
				<p className={style.product__count}>Products Count ({productCount})</p>
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
