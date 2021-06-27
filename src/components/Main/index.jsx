import "./styles.scss";
import { Products } from "./Products";
import { Breadcrumbs } from "./Breadcrumbs";
import { Filters } from "./Filters";

export function Main() {
  return (
    <main className="main">
      <Breadcrumbs />
      <Filters />
      <Products />
    </main>
  );
}
