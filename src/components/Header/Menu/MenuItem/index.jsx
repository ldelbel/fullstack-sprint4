export function MenuItem({ categorie }) {
    const { link, label } = categorie;

  return (
    <li className="menu__item">
      <a className="menu__link" href={link}>
        {label}
      </a>
    </li>
  );
}
