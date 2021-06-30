import { Skeleton } from "antd";
import { useEffect, useState } from "react";
import { useLoading } from "../../../contexts/LoadingContext";
import { useMessages } from "../../../contexts/MessagesContext";
import { getBreadcrumbs } from "../../../services/breadcrumbsService";
import { Breadcrumb } from "./Breadcrumb";

export function Breadcrumbs() {
  const [data, setData] = useState();
  const { addMessage } = useMessages();
  const { isLoadingFetch, addRequestFetch, removeRequestFetch } = useLoading();

  async function fetchData() {
    addRequestFetch('breadcrumbs');
    const req = await getBreadcrumbs();
    if (req.error) {
      addMessage(req.error);
      return;
    }
    setData(req);
    removeRequestFetch('breadcrumbs');
  }

  useEffect(() => {
    fetchData();
  }, []);

  if(isLoadingFetch) {
    return <Skeleton  title={false} paragraph={{ rows: 1, width: '23%'}}active />
  }

  return (
    <section className="main__breadcrumbs breadcrumbs">
      <nav>
        <ol className="breadcrumbs__list">
          { data && data.map((breadcrumb, idx, arr) => (
              <Breadcrumb key={breadcrumb.id} breadcrumb={breadcrumb} idx={idx} arr={arr} />
            ))
          }
        </ol>
      </nav>
    </section>
  );
}
