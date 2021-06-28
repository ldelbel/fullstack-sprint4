import { useEffect, useState } from "react";
import { getProducts } from "../../../services/productsService";
import { Product } from "./Product";

export function Products() {
  const [data, setData] = useState();
  const [chunks, setChunks] = useState();

  async function fetchData() {
    const req = await getProducts();
    setData(req);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      const chunks = Array.from({ length: data.length / 4 }, () =>
        data.splice(0, 4)
      );

      setChunks(chunks);
    }
  }, [data]);

  return (
    <section className="main__products products">
      {chunks &&
        chunks.map((row, idx) => (
          <div className="products__row" key={`key${idx}`}>
            <ol className="products__list">
              {row.map((product) => (
                <Product key={product.sku} product={product} />
              ))}
            </ol>
          </div>
        ))}
    </section>
  );
}
