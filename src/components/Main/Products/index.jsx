import { useEffect, useState } from "react";
import { useMessages } from "../../../contexts/MessagesContext";
import { useSearch } from "../../../contexts/SearchContext";
import { getProducts } from "../../../services/productsService";
import { Product } from "./Product";

export function Products() {
  const [data, setData] = useState();
  const [display, setDisplay] = useState();
  const { addMessage } = useMessages();
  const { searchText } = useSearch();

  async function fetchData() {
    const req = await getProducts();
    if (req.error) {
      addMessage(req.error);
      return;
    }
    setData(req);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(()=>{
    if(data)
      filterBySearch(searchText);
  },[data, searchText])

  function filterBySearch(text) {
    if(!text)
      setDisplay(data);

    const filtered = data.filter((product) => product.name.toLowerCase().includes(text.toLowerCase()));
    console.log(filtered)
    setDisplay(filtered);
  }


  return (
    <section>
      <ul className="main__products">
        {display &&
          display.map((product) => (
            <Product key={product.sku} product={product} />
          ))}
      </ul>
    </section>
  );
}
