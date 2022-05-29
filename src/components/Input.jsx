function Input({
	type,
	placeholder,
	defaultValue,
	name,
	changeHandler,
	error,
	errMsg
}) {
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
			{error && <p className='error__msg'>{errMsg}</p>}
		</div>
	);
}

export default Input;
