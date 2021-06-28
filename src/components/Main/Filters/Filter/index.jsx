
import filterImg from "../../../../assets/filter.svg";

export function Filter({ filter }) {
  return (
    <li className="filters__item">
      <span className="filters__label">{filter.label}</span>
      <img className="filters__img" src={filterImg} />
    </li>
  );
}
