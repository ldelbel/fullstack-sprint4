import { getData } from "./fetch";

export async function getProducts() {
    const data = await getData("/products.json");
    return data.products;
}