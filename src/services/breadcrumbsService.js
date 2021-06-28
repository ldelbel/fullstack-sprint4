import { getData } from "./fetch";

export async function getBreadcrumbs() {
    const data = await getData("categories.json");
    return data.current;
}