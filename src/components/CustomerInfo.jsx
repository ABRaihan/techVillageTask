import { useState } from "react";
import AccountCircleIcon from "../assets/icons/AccountCircleIcon";
import AddCircleOutlineIcon from "../assets/icons/AddCircleOutlineIcon";
import style from "../styles/components/customerInfo.module.css";
import { inputValidator } from "../utility/inputChecker";
import AddNewCustomerForm from "./AddNewCustomerForm";
import Input from "./Input";
function CustomerInfo() {
	const [customer, setCustomer] = useState({
		name: "Steve Jobs",
		email: "steve111@gmail.com",
		phone: "+8801820018200",
		currency: "USD",
		taxID: "001"
	});
	const [isCustomerFormShow, setIsCustomerFormShow] = useState(false);
	const [error, setError] = useState({ name: "", status: false, msg: "" });
	const updateCustomerInfo = {};
	const customerFormHandler = (event) => {
		updateCustomerInfo[event.target.name] = event.target.value;
		if (error.status) {
			const { status } = inputValidator(updateCustomerInfo);
			!status && setError({});
		}
	};
	return (
		<>
			<div className={style.wrapper}>
				<p className={style.customer__name}>
					<AccountCircleIcon color='#5162B9' />
					<span>{customer.name}</span>
				</p>
				<AddCircleOutlineIcon
					clickHandler={() => setIsCustomerFormShow(true)}
					color='#5162B9'
				/>
			</div>
			{isCustomerFormShow && (
				<AddNewCustomerForm
					setIsCustomerFormShow={setIsCustomerFormShow}
					setCustomer={setCustomer}
					updateCustomer={updateCustomerInfo}
					setError={setError}
				>
					<Input
						type='text'
						placeholder='Name'
						defaultValue={customer.name}
						name='name'
						changeHandler={customerFormHandler}
						error={error.name === "name" && error.status}
						errMsg={error.msg}
					/>
					<Input
						type='text'
						placeholder='Email'
						defaultValue={customer.email}
						name='email'
						changeHandler={customerFormHandler}
						error={error.name === "email" && error.status}
						errMsg={error.msg}
					/>
					<Input
						type='text'
						placeholder='Phone'
						defaultValue={customer.phone}
						name='phone'
						changeHandler={customerFormHandler}
						error={error.name === "phone" && error.status}
						errMsg={error.msg}
					/>
				</AddNewCustomerForm>
			)}
		</>
	);
}

export default CustomerInfo;
