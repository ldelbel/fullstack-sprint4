import { getData } from "./fetch";

export async function getProducts() {
  try {
    const data = await getData("products.json");
    if (typeof data === "string") {
      throw new Error(data);
    }
    return data.products;
  } catch (err) {
    return { error: { object: "os produtos", type: err.message } };
  }
}
