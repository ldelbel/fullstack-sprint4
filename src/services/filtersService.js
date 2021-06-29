import { getData } from "./fetch";

export async function getFilters() {
  try {
    const data = await getData("products.json");
    if (typeof data === "string") {
      throw new Error(data);
    }
    return data.filters;
  } catch (err) {
    return { error: { object: "os filtros", type: err.message } };
  }
}
