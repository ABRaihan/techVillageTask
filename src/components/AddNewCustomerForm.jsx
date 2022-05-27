import AddIcon from "../assets/icons/AddIcon";
import ArrowLeftIcon from "../assets/icons/ArrowLeftIcon";
import style from "../styles/components/addNewCustomerForm.module.css";
function AddNewCustomerForm({
	setCustomer,
	updateCustomer,
	setIsCustomerFormShow,
	children
}) {
	const updateCustomerHandler = () => {
		setCustomer((prev) => ({ ...prev, ...updateCustomer }));
		setIsCustomerFormShow(false);
	};
	return (
		<div className={style.wrapper}>
			<div className={style.form__modal}>
				<p className={style.form__title}>
					<span
						className={style.arrow__left}
						onClick={() => setIsCustomerFormShow(false)}
					>
						<ArrowLeftIcon color='#586875' />
					</span>
					Add New Customer
				</p>
				<form className={style.customer__form}>{children}</form>
				<p className={style.add__more__text}>
					<AddIcon color='#2F6CCF' />
					Add More Details
				</p>
				<button
					onClick={updateCustomerHandler}
					className={style.update__btn}
				>
					Update
				</button>
			</div>
		</div>
	);
}

export default AddNewCustomerForm;
