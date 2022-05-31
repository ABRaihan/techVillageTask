import MoreVerticalIcon from "../assets/icons/MoreVerticalIcon";
import style from "../styles/components/categoryBar.module.css";
import categories from "../data/categories.json";
import CategoryButton from "./CategoryButton";
function CategoryBar({
	activeCategory,
	categoryFilterHandler,
	setCategoryModalShow
}) {
	return (
		<div className={style.category__top__bar}>
			<div className={style.category__wrapper}>
				{categories.map(({ title, name }, index) => {
					if (index <= 5) {
						return (
							<CategoryButton
								clickHandler={categoryFilterHandler.bind(
									null,
									name
								)}
								active={activeCategory === name}
								key={Math.random()}
								title={title}
							/>
						);
					}
					return null;
				})}
			</div>
			<MoreVerticalIcon clickHandler={() => setCategoryModalShow(true)} />
		</div>
	);
}

export default CategoryBar;
