import { useEffect, useState } from "react";
import { useMessages } from "../../../contexts/MessagesContext";
import { getFilters } from "../../../services/filtersService";
import { Filter } from "./Filter";

export function Filters() {
  const [data, setData] = useState();
  const { addMessage } = useMessages();

  async function fetchData() {
    const req = await getFilters();
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
    <section className="main__filters filters">
      <ul className="filters__list">
        {data &&
          data.map((filter) => <Filter key={filter.id} filter={filter} />)}
      </ul>
    </section>
  );
}
