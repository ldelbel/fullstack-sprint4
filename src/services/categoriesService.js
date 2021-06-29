import { getData } from "./fetch";

export async function getCategories() {
  try {
    const data = await getData("categories.json");
    if (typeof data === "string") {
      throw new Error(data);
    }
    return data.all;
  } catch (err) {
    return { error: { object: "as categorias", type: err.message } };
  }
}
