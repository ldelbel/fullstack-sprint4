import { useEffect, useState } from "react";
import { getFilters } from "../../../services/filtersService";
import { Filter } from "./Filter";

export function Filters() {
  const [data, setData] = useState();

  async function fetchData() {
    const req = await getFilters();
    setData(req);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="main__filters filters">
      <ul className="filters__list">
        {data && data.map((filter) => <Filter filter={filter} />)}
      </ul>
    </section>
  );
}
