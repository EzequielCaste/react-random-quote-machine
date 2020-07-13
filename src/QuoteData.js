export default async function QuoteData() {
  const url =
    "https://cdn.jsdelivr.net/gh/caglarturali/quotalog@master/src/shared/quotes.json";
  const response = await fetch(url);
  const data = await response.json();

  return data;
}
