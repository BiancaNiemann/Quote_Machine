const newQuoteEl = document.getElementById('new-quote')
const textEl = document.getElementById('text')
const authorEl = document.getElementById('author')
const tweetEl = document.getElementById("tweet-quote")

function getQuote(){ fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
        .then(res => res.json())
        .then(data => {
      const quotesLength = data.quotes.length
      const randomNumber = Math.floor((Math.random() * quotesLength)-1)
      const quote = data.quotes[randomNumber].quote
      const author = data.quotes[randomNumber].author

      textEl.innerText = quote
      authorEl.innerText = author
  })
}
getQuote()

function getColor(){
  const colors = [
    "#083D77",
    "#DA4167",
    "#F4D35E",
    "#F78764",
    "#191923",
    "#0E79B2",
    "#BF1363",
    "#F39237",
    "#C86FC9",
    "#8E518D",
    "#4DCCBD",
    "#2374AB",
    "#231651",
    "#71B340",
    "#F96900",
    "#98CE00"
  ]
  const randomColorNumber = Math.floor((Math.random() * colors.length)-1)
  document.body.style.backgroundColor = colors[randomColorNumber]
  textEl.style.color = colors[randomColorNumber]
  authorEl.style.color = colors[randomColorNumber]
  newQuoteEl.style.backgroundColor = colors[randomColorNumber]
  tweetEl.style.color = colors[randomColorNumber]
}

newQuoteEl.addEventListener('click', function(){
 getQuote()
 getColor()
})

