import { getData } from "./fetch";

export async function getFilters() {
    const data = await getData("products.json");
    return data.filters;
}