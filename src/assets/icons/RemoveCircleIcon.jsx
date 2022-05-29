function RemoveCircleIcon({ color, clickHandler }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='30px'
			viewBox='0 0 24 24'
			width='30px'
			fill={color || "#000000"}
			onClick={clickHandler}
		>
			<path d='M0 0h24v24H0z' fill='none' />
			<path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z' />
		</svg>
	);
}

export default RemoveCircleIcon;
