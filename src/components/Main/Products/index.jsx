import { useEffect, useState } from "react";
import { useMessages } from "../../../contexts/MessagesContext";
import { getProducts } from "../../../services/productsService";
import { Product } from "./Product";

export function Products() {
  const [data, setData] = useState();
  const { addMessage } = useMessages();

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

  return (
    <section>
      <ul className="main__products">
        {data &&
          data.map((product) => (
            <Product key={product.sku} product={product} />
          ))}
      </ul>
    </section>
  );
}
