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

    quoteLabel.style.animationName = "animationOut";
    quoteLabel.style.animationDuration = "0.35s";
    authorLabel.style.animationName = "animationOut";
    authorLabel.style.animationDuration = "0.35s";

    window.setTimeout(function() {
      quoteLabel.textContent = "- " + quotes[quoteNumber].quote + " -";
      authorLabel.textContent = quotes[quoteNumber].author;
      body.style.backgroundColor = color;

      authorLabel.style.animationName = "animationIn"
      quoteLabel.style.animationName = "animationIn";

      authorLabel.style.width = quoteLabel.offsetWidth + "px";
    }, 350);

    window.setTimeout(function() {
      quoteLabel.style.animationName = "";
    }, 850);
  }

  var quoteInterval = null;

  function buildQuoteInterval() {
    window.clearInterval(quoteInterval)
    presentQuote();
    quoteInterval = window.setInterval(presentQuote, 4000);
  }

  window.setTimeout(function() {
    body.addEventListener("click", buildQuoteInterval);
  }, 2000);

  quoteLabel.style.animationName = "animationIn";
  quoteLabel.style.animationDuration = "0.35s";

  window.setTimeout(function() {
    buildQuoteInterval();
  }, 2500);
})
