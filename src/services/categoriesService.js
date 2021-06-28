import { getData } from "./fetch";

export async function getCategories() {
    const data = await getData("categories.json");
    return data.all;
}