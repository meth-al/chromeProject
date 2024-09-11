const quotes = [
    {
        quote: "I think, therefore I am.",
        author: "René Descartes"
    },
    {
        quote: "Every great achievement is the result of action, not just thought.",
        author: "John Dewey"
    },
    {
        quote: "Know thyself.",
        author: "Socrates"
    },
    {
        quote: "Life is what we make it.",
        author: "Oscar Wilde"
    },
    {
        quote: "Tomorrow is a new day.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Patience is bitter, but its fruit is sweet.",
        author: "Jean-Jacques Rousseau"
    },
    {
        quote: "Failure is a part of the road to success.",
        author: "Abraham Lincoln"
    },
    {
        quote: "Lost time is never found again.",
        author: "Benjamin Franklin"
    },
    {
        quote: "The only thing we have to fear is fear itself.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "Happiness is not something ready-made. It comes from your own actions.",
        author: "Mahatma Gandhi"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;