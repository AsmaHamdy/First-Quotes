var quoteOptions = [
  {
    quote:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
      author: "--Marilyn Monroe",
  },
  {
    quote: "“Don't cry because it's over, smile because it happened.”",
    author: "--Dr. Seuss",
  },
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "--Oscar Wilde",
  },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
      author: " --Albert Einstein",
  },
  {
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
      author: "--Bernard M. Baruch",
  },
  {
    quote:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
      author: "--Dr. Seuss",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    author: "-- Marcus Tullius Cicero ",
  },
  {
    quote: "“So many books, so little time.”",
    author: "--Frank Zappa",
  },
  {
    quote: "“You only live once, but if you do it right, once is enough.”",
    author: "--Mae West",
  },
  {
    quote: "“Be the change that you wish to see in the world.”",
    author: "--Mahatma Gandhi",
  },
  {
    quote: " “Beware of what you become in pursuit of what you want ”.",
    author: " --Jim Rohn",
  },
  {
    quote:
      " “It's not what happens to you, but how you react to it that matters”.",
    author: "--Epictetus",
  },
  { quote: " “The best revenge is massive success”.", author: "Frank Sinatra" },
  {
    quote: " “You miss 100% of the shots you don't take”.",
    author: "--Wayne Gretzy",
  },
  {
    quote:
      "“Resentment is like drinking poison and waiting for your enemies to die”.",
    author: "--Nelson Mandela",
  },
  {
    quote: "“Do not take life too seriously. You will not get out alive”.",
    author: "--Elbert Hubbard",
  },
];
function newQuote() {
  var randomQuote = Math.floor(Math.random() * quoteOptions.length);
  document.getElementById("quoteOutput").innerHTML =
    quoteOptions[randomQuote].quote;
  document.getElementById("authorOutput").innerHTML =
    quoteOptions[randomQuote].author;
}



var  unique = [];
function removeDuplicates(quoteOptions) {
  quoteOptions.forEach(element => {
      if (!unique.includes(element)) {
          unique.push(element);
      }
  });
  return unique;
}