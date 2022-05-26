import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import CashIcon from "../assets/icons/CashIcon";
import CloseIcon from "../assets/icons/CloseIcon";
import DashboardIcon from "../assets/icons/DashboardIcon";
import LocationIcon from "../assets/icons/LocationIcon";
import SettingIcon from "../assets/icons/SettingIcon";
import { Context } from "../context/store";
import style from "../styles/components/sidebar.module.css";
function Sidebar() {
	const { state, actions } = useContext(Context);
	const navigationMenus = [
		{ name: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
		{ name: "Locations", path: "/locations", icon: <LocationIcon /> },
		{ name: "POS Invoices", path: "/invoice", icon: <CashIcon /> },
		{ name: "Settings", path: "/settings", icon: <SettingIcon /> }
	];
	return (
		<>
			<div
				className={`${style.wrapper} ${
					state.isSidebarShow ? style.sidebar__show : ""
				}`}
			>
				<div className={style.logo__wrapper}>
					<h2 className={style.logo__text}>
						<Link to='/' style={{ color: "black" }}>
							go<span className={style.logo__highlight}>B</span>
							illing
						</Link>
					</h2>
					<p className={style.address__title}>Location:</p>
					<p className={style.address}>Los Angeles, California</p>
				</div>
				<ul className={style.menu}>
					{navigationMenus.map(({ name, icon, path }) => (
						<li key={Math.random()} className={style.menu__item}>
							<NavLink
								to={path}
								className={({ isActive }) =>
									isActive
										? [
												style.active__menu,
												style.menu__item__link
										  ].join(" ")
										: style.menu__item__link
								}
							>
								{icon}
								<span className={style.menu__text}>{name}</span>
							</NavLink>
						</li>
					))}
				</ul>
			</div>
			<div
				className={`${style.overlay} ${
					state.isSidebarShow ? style.overlay__show : ""
				}`}
			>
				<span onClick={() => actions.setSidebarShow(false)}>
					<CloseIcon color='#fff' />
				</span>
			</div>
		</>
	);
}
export default Sidebar;
