const EP_URL = "http://5dcfc8d8d5f1a500149a81ba.mockapi.io/test/example";

async function myFunction() {
  const res = await fetch(EP_URL);
  const json = await res.json();

  return json;
}
