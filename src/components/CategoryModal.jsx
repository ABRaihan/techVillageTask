import CategoryButton from "./CategoryButton";
import style from "../styles/components/categoryModal.module.css";
import CloseIcon from "../assets/icons/CloseIcon";
function CategoryModal({
	activeCategory,
	categories,
	categoryModalShow,
	setCategoryModalShow,
	filterHandler
}) {
	return (
		<>
			<div
				className={`${style.wrapper} ${
					categoryModalShow ? style.category__show : ""
				}`}
			>
				<h4 className={style.title}>Categories</h4>
				<div className={style.categories}>
					{categories.map(({ name, title }) => (
						<CategoryButton
							active={activeCategory === name}
							key={Math.random()}
							title={title}
							clickHandler={filterHandler.bind(null, name)}
						/>
					))}
				</div>
			</div>
			<div
				className={`${style.overlay} ${
					categoryModalShow ? style.overlay__show : ""
				}`}
			>
				<CloseIcon
					clickHandler={() => setCategoryModalShow(false)}
					color='#fff'
				/>
			</div>
		</>
	);
}

export default CategoryModal;
