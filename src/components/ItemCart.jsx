import style from "../styles/components/itemCart.module.css";
function ItemCart({ item, clickHandler }) {
	const { name, unitPrice, img } = item;
	return (
		<div className={style.cart} onClick={clickHandler}>
			<div className={style.item__img__wrapper}>
				<img className={style.item__img} src={img} alt={name} />
			</div>
			<p className={style.item__price}>${unitPrice}</p>
			<p className={style.item__name}>{name}</p>
		</div>
	);
}

export default ItemCart;
