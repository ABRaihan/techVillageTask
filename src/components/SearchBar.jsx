import BarcodeIcon from "../assets/icons/BarcodeIcon";
import SearchIcon from "../assets/icons/SearchIcon";
import style from "../styles/components/searchBar.module.css";
function SearchBar() {
	return (
		<div className={style.wrapper}>
			<SearchIcon color='#5E5F5F' />
			<input
				className={style.input__control}
				type='text'
				placeholder='Search...'
			/>
			<BarcodeIcon />
		</div>
	);
}

export default SearchBar;
