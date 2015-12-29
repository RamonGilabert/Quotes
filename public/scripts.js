document.addEventListener("DOMContentLoaded", function() {

  var quoteLabel = document.getElementById("quote-label");

  for (var i = 0; i < window.quotes.length; i++) {
    quoteLabel.textContent = window.quotes[i].quote;
  }
})
