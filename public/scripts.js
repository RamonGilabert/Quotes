document.addEventListener("DOMContentLoaded", function() {

  var quoteLabel = document.getElementById("quote-label");
  var authorLabel = document.getElementById("author-label");

  for (var i = 0; i < window.quotes.length; i++) {
    quoteLabel.textContent = window.quotes[i].quote;
  }

  var quoteWidth = parseFloat(style.getPropertyValue('margin-left').replace('px', ''))
  var quoteLeftMargin = parseFloat(style.getPropertyValue('width').replace('px', ''))
  var leftMargin = quoteWidth + quoteLeftMargin

  console.log(leftMargin)

  authorLabel.style.marginLeft = leftMargin + "px"
})
