document.addEventListener("DOMContentLoaded", function() {

  var quoteLabel = document.getElementById("quote-label");
  var authorLabel = document.getElementById("author-label");
  var body = document.body;
  var quotes = window.quotes;

  function presentQuote() {
    var quoteNumber = Math.floor(Math.random() * quotes.length);

    quoteLabel.textContent = quotes[quoteNumber].quote;
    authorLabel.textContent = quotes[quoteNumber].author;

    authorLabel.style.width = quoteLabel.offsetWidth + "px";
  }

  function buildQuoteInterval() {
    return window.setInterval(presentQuote, 2500);
  }

  window.setTimeout(function() {
    body.addEventListener("click", function() { presentQuote(); });
  }, 1500);

  presentQuote();
})
