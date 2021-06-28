import { useEffect, useState } from "react";
import { getBreadcrumbs } from "../../../services/breadcrumbsService";
import { Breadcrumb } from "./Breadcrumb";

export function Breadcrumbs() {
  const [data, setData] = useState();

  async function fetchData() {
    const req = await getBreadcrumbs();
    setData(req);
  }

  useEffect(() => {
    fetchData();
  }, []);

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
