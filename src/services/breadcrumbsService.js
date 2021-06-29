import { getData } from "./fetch";

export async function getBreadcrumbs() {
    try {
        const data = await getData("categories.json");
        if (typeof data === "string") {
          throw new Error(data);
        }
        return data.current;
      } catch (err) {
        return { error: { object: "a trilha de navegação", type: err.message } };
      }
}