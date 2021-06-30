import { images } from "./images";

export function Product({ product }) {
  const { image, name, price } = product;

  return (
    <li className="products__card card">
      <div className="card">
        <img className="card__img" src={images[image]} />
        <p className="card__description">{name}</p>
        <p className="card__price">R$ {price}</p>
      </div>
    </li>
  );
}
