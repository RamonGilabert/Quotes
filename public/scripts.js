document.addEventListener("DOMContentLoaded", function() {

  var quoteLabel = document.getElementById("quote-label");
  var authorLabel = document.getElementById("author-label");

  for (var i = 0; i < window.quotes.length; i++) {
    quoteLabel.textContent = window.quotes[i].quote;
    authorLabel.textContent = window.quotes[i].author;
  }

  authorLabel.style.width = quoteLabel.offsetWidth + "px";
})
