import { useEffect, useState } from "react";
import { getCategories } from "../../../services/categoriesService";
import { MenuItem } from "./MenuItem";

export function Menu() {
  const [data, setData] = useState();

  async function fetchData() {
    const req = await getCategories();
    setData(req);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <nav className="header__menu menu">
      <ul className="menu__list">
        { data && data.map(categorie => (
            <MenuItem key={`categorie${categorie.id}`} categorie={categorie} />
        ))}
      </ul>
    </nav>
  );
}
