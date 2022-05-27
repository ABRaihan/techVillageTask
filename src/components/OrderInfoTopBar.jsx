import { useContext } from "react";
import AddCircleIcon from "../assets/icons/AddCircleIcon";
import DashedCircleIcon from "../assets/icons/DashedCircleIcon";
import EditNoteIcon from "../assets/icons/EditNoteIcon";
import LocalShippingIcon from "../assets/icons/LocalShippingIcon";
import MenuIcon from "../assets/icons/MenuIcon";
import { Context } from "../context/store";
import style from "../styles/components/orderInfoTopBar.module.css";
import OrderInfoButton from "./OrderInfoButton";
function OrderInfoTopBar() {
	const { actions } = useContext(Context);
	return (
		<div className={style.wrapper}>
			<span onClick={() => actions.setSidebarShow(true)}>
				<MenuIcon />
			</span>
			<OrderInfoButton title='Note'>
				<EditNoteIcon color='#5162B9' />
			</OrderInfoButton>
			<OrderInfoButton title='Shipping'>
				<LocalShippingIcon color='#5162B9' />
			</OrderInfoButton>
			<OrderInfoButton title='Hold Orders'>
				<DashedCircleIcon color='#5162B9' />
			</OrderInfoButton>
			<OrderInfoButton title='New Item'>
				<AddCircleIcon color='#5162B9' />
			</OrderInfoButton>
		</div>
	);
}

export default OrderInfoTopBar;
