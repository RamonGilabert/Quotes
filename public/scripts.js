document.addEventListener("DOMContentLoaded", function() {

  var quoteLabel = document.getElementById("quote-label");
  var authorLabel = document.getElementById("author-label");

  for (var i = 0; i < window.quotes.length; i++) {
    quoteLabel.textContent = window.quotes[i].quote;
  }

  var leftMargin = 0.5 * quoteLabel.offsetWidth + quoteLabel.offsetLeft - authorLabel.offsetWidth;
  console.log(quoteLabel.offsetWidth)
  console.log(quoteLabel.offsetLeft)
  authorLabel.style.marginLeft = leftMargin + "px";
})
