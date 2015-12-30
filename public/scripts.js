document.addEventListener("DOMContentLoaded", function() {

  var quoteLabel = document.getElementById("quote-label");
  var authorLabel = document.getElementById("author-label");
  var body = document.body;
  var quotes = window.quotes;
  var colors = ["#BCF378", "#FFABD0", "#4FBDF2", "#4AF2A1", "#E3C18A"];

  function presentQuote() {
    var quoteNumber = Math.floor(Math.random() * quotes.length);
    var colorNumber = Math.floor(Math.random() * colors.length);
    var color = colors[colorNumber];

    quoteLabel.textContent = quotes[quoteNumber].quote;
    authorLabel.textContent = quotes[quoteNumber].author;
    body.style.backgroundColor = color;

    authorLabel.style.width = quoteLabel.offsetWidth + "px";
  }

  var quoteInterval = null;

  function buildQuoteInterval() {
    window.clearInterval(quoteInterval)
    presentQuote();
    quoteInterval = window.setInterval(presentQuote, 3500);
  }

  window.setTimeout(function() {
    body.addEventListener("click", buildQuoteInterval);
  }, 1500);

  buildQuoteInterval();
})
