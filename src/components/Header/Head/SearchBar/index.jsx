import { useRef } from "react";
import searchImg from "../../../../assets/search.svg";
import { useLoading } from "../../../../contexts/LoadingContext";
import { useSearch } from "../../../../contexts/SearchContext";

export function SearchBar() {
  const { setSearchText } = useSearch();
  const countRef = useRef();
  const { isLoading, addRequest, removeRequest } = useLoading();

  function searchProducts(event) {
    clearTimeout(countRef.current);
    addRequest();
    countRef.current = setTimeout(() => {
      setSearchText(event.target.value);
      removeRequest();
    }, 2500);
  }

  return (
    <div className="header__search">
      <img className="header__icon" src={searchImg} />
      <input
        className="header__input"
        type="search"
        placeholder="O que você está procurando?"
        onChange={(e) => searchProducts(e)}
      />
    </div>
  );
}
