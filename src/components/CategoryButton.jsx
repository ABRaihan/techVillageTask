import style from "../styles/components/categoryButton.module.css";
function CategoryButton({ title, active, clickHandler }) {
	return (
		<button
			className={`${style.category__btn} ${
				active ? style.active__category : ""
			}`}
			onClick={clickHandler}
		>
			{title}
		</button>
	);
}

export default CategoryButton;
