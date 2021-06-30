import { Skeleton } from "antd";
import { useEffect, useState } from "react";
import { useLoading } from "../../../contexts/LoadingContext";
import { useMessages } from "../../../contexts/MessagesContext";
import { getCategories } from "../../../services/categoriesService";
import { MenuItem } from "./MenuItem";

export function Menu() {
  const [data, setData] = useState();
  const { addMessage } = useMessages();
  const { isLoadingFetch, addRequestFetch, removeRequestFetch } = useLoading();

  async function fetchData() {
    addRequestFetch('menu');
    const req = await getCategories();
    if(req.error) {
      addMessage(req.error);
      return;
    }
    setData(req);
    removeRequestFetch('menu');
  }

  useEffect(() => {
    fetchData();
  }, []);

  if(isLoadingFetch) {
    return <div style={{marginTop: 20}}><Skeleton  title={false} paragraph={{ rows: 1, width: '100%'}}active /></div>
  }

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
