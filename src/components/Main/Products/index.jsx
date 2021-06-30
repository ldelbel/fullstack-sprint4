import { useEffect, useState } from "react";
import { Skeleton, Space } from "antd";
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
  const {
    isLoadingSearch,
    isLoadingFetch,
    addRequestFetch,
    removeRequestFetch,
  } = useLoading();

  async function fetchData() {
    addRequestFetch('products');
    const req = await getProducts();
    if (req.error) {
      addMessage(req.error);
      return;
    }
    setData(req);
    setTimeout(() => {
      removeRequestFetch('products');
    }, 2500)
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

  const arr = new Array(8).fill("");

  if (isLoadingFetch) {
    return (
      <Space className="products-loading">
        {arr.map(() => (
          <div>
            <Skeleton.Avatar size={250} shape="square" />
            <div style={{ marginTop: 20 }}>
              <Skeleton
                title={false}
                paragraph={{ rows: 2, width: "100%" }}
                active
              />
            </div>
          </div>
        ))}
      </Space>
    );
  }

  return (
    <Spin spinning={isLoadingSearch} indicator={antIcon} size="large">
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
