export default function initQuoute() {
  fetch('https://stoicquotesapi.com/v1/api/quotes/random')
  .then(res => res.json())
  .then(quote => {
    const paragraph = document.querySelector('[data-quote-api] p');
    const author = document.querySelector('[data-quote-api] cite');

    paragraph.innerText = `"${quote.body}"`;
    author.innerText = quote.author;
  });
}