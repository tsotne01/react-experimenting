import { useState } from "react";

export default function Card() {
  const [quote, setQuote] = useState();

  async function getQuote() {
    try {
      const data = await fetch(
        "https://programming-quotesapi.vercel.app/api/random"
      );
      const response = await data.json();
      console.log(response);
      setQuote(() => response);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <section className="quote-box">
      <h1>Random programming Quote</h1>
      <h2>{quote?.quote ? quote.quote : "click Random Quote button"}</h2>
      <p>{quote?.author}</p>
      <button onClick={getQuote}>Random Quote</button>
    </section>
  );
}
