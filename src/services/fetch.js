export async function getData(path) {
  try {
    const response = await fetch(`/data/${path}`);

    if (!response.ok) throw new Error(response.statusText);

    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
}
