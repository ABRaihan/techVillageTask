import { useState } from "react";
import AddCircleIcon from "../assets/icons/AddCircleIcon";
import DeleteIcon from "../assets/icons/DeleteIcon";
import EditIcon from "../assets/icons/EditIcon";
import RemoveCircleIcon from "../assets/icons/RemoveCircleIcon";
import style from "../styles/components/itemTable.module.css";
function ItemTable({ items, setItems }) {
	const [editMode, setIsEditMode] = useState({ id: "", edit: false });
	const editItem = {};
	const itemEditHandler = (itemId) => {
		if (itemId === editMode.id) {
			setIsEditMode({ id: "", edit: false });
			setItems((prev) => {
				const itemIndex = prev.findIndex(({ id }) => id === itemId);
				prev[itemIndex] = { ...prev[itemIndex], ...editItem };
				return [...prev];
			});
			return;
		}
		setIsEditMode({ id: itemId, edit: true });
	};
	const itemChangeHandler = (id, e) => {
		editItem.id = id;
		editItem[e.target.name] = e.target.value;
	};
	const itemQuantityHandler = (itemId, type, e) => {
		const findItem = items.find(({ id }) => id === itemId);
		type === "increment"
			? (findItem.quantity = findItem.quantity + 1)
			: (findItem.quantity =
					findItem.quantity > 1 ? findItem.quantity - 1 : 1);
		setItems((prev) => {
			const itemIndex = prev.findIndex(({ id }) => id === itemId);
			prev[itemIndex] = findItem;
			return [...prev];
		});
	};
	const itemDeleteHandler = (itemId) => {
		setItems((prev) => prev.filter(({ id }) => id !== itemId));
	};
	return (
		<div className={style.wrapper}>
			{items.map(({ id, name, unitPrice, quantity }) => (
				<div key={Math.random()} className={style.item}>
					<EditIcon
						color='#586875'
						clickHandler={itemEditHandler.bind(null, id)}
					/>
					<div className={style.item__row__wrapper}>
						<div className={style.item__row}>
							{id !== editMode.id && (
								<p className={style.item__name}>{name}</p>
							)}
							{id === editMode.id && editMode.edit && (
								<input
									className={style.input__control}
									type='text'
									defaultValue={name}
									name='name'
									onChange={itemChangeHandler.bind(null, id)}
								/>
							)}
							<p className={style.unit__price}>
								${(+unitPrice).toFixed(2)}
							</p>
							<div className={style.counter}>
								<RemoveCircleIcon
									color="#586875"
									clickHandler={itemQuantityHandler.bind(
										null,
										id,
										"decrement"
									)}
								/>
								<span className={style.quantity}>{quantity}</span>
								<AddCircleIcon
									color="#586875"
									clickHandler={itemQuantityHandler.bind(
										null,
										id,
										"increment"
									)}
								/>
							</div>
							<p className={style.total__price}>
								${(unitPrice * quantity).toFixed(2)}
							</p>
						</div>
					</div>
					<DeleteIcon
						color="#E0514F"
						clickHandler={itemDeleteHandler.bind(null, id)}
					/>
				</div>
			))}
		</div>
	);
}

export default ItemTable;
