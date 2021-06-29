import { useEffect, useState } from "react";
import "antd/es/spin/style/css";
import Spin from "antd/es/spin";
import { LoadingOutlined } from "@ant-design/icons";
import { Product } from "./Product";
import { useLoading } from "../../../contexts/LoadingContext";
import { useMessages } from "../../../contexts/MessagesContext";
import { useSearch } from "../../../contexts/SearchContext";
import { getProducts } from "../../../services/productsService";

const antIcon = (
  <LoadingOutlined style={{ fontSize: 70, color: "#9e9e9e" }} spin />
);

export function Products() {
  const [data, setData] = useState();
  const [display, setDisplay] = useState();
  const { addMessage } = useMessages();
  const { searchText } = useSearch();
  const { isLoadingSearch } = useLoading();

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

  useEffect(() => {
    if (data) filterBySearch(searchText);
  }, [data, searchText]);

  function filterBySearch(text) {
    if (!text) setDisplay(data);

    const filtered = data.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    );
    setDisplay(filtered);
  }

  // if (isLoadingSearch)
  //   return (
  //     <div className="loading">
  //       <Spin spinning={ true } />
  //     </div>
  //   );

  return (
    <Spin
      spinning={isLoadingSearch}
      indicator={antIcon}
      size="large"
    >
      <section>
        <ul className="main__products">
          {display &&
            display.map((product) => (
              <Product key={product.sku} product={product} />
            ))}
        </ul>
      </section>
    </Spin>
  );
}
