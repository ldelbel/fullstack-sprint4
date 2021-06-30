import { Skeleton } from "antd";
import { useEffect, useState } from "react";
import { useLoading } from "../../../contexts/LoadingContext";
import { useMessages } from "../../../contexts/MessagesContext";
import { getFilters } from "../../../services/filtersService";
import { Filter } from "./Filter";

export function Filters() {
  const [data, setData] = useState();
  const { addMessage } = useMessages();
  const { isLoadingFetch, addRequestFetch, removeRequestFetch } = useLoading();

  async function fetchData() {
    addRequestFetch('filters');
    const req = await getFilters();
    if (req.error) {
      addMessage(req.error);
      return;
    }
    setData(req);
    removeRequestFetch('filters');
  }

  useEffect(() => {
    fetchData();
  }, []);

  if(isLoadingFetch) {
    return <Skeleton  title={false} paragraph={{ rows: 1, width: '100%'}}active />
  }

  return (
    <section className="main__filters filters">
      <ul className="filters__list">
        {data &&
          data.map((filter) => <Filter key={filter.id} filter={filter} />)}
      </ul>
    </section>
  );
}
