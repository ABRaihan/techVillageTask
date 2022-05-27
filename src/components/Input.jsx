function Input({ type, placeholder, defaultValue, name, changeHandler }) {
	return (
		<div className='input__wrapper'>
			<input
				className='input__control'
				type={type}
				placeholder={placeholder}
				defaultValue={defaultValue}
				name={name}
				onChange={changeHandler}
			/>
		</div>
	);
}

export default Input;
