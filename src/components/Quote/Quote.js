import React, { useEffect, useState } from 'react';

function Quote() {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuoteandAuthor = async (category = 'happiness') => {
    const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      method: 'GET',
      headers: { 'X-Api-Key': 'iOXIllE64HspK+YDSGI6Dw==TxSXPFLZ9bKkMDFo' },
      contentType: 'application/json',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch quote');
    }

    const dataarray = await response.json();
    return dataarray;
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchQuoteandAuthor()
      .then((dataarray) => {
        setQuote(dataarray[Math.floor(Math.random())].quote);
        setAuthor(dataarray[0].author);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading..</p>;
  }

  if (error) {
    return (
      <p>
        Error:
        {error}
      </p>
    );
  }

  return (
    <main className="quote-main">
      <div className="quote-paragraphs">
        <p className="quote-paragraph1">
          {quote}
        </p>
        <p className="quote-paragraph2">
          {author}
        </p>
      </div>
    </main>
  );
}

export default Quote;
