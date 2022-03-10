export default async function getAPINumber(url) {
  let data = await fetch(url, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
  });
  let dataJson = await data.json();
  return dataJson;
}
