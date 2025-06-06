const quotes = [
  "The best way to get started is to quit talking and begin doing. – Walt Disney",
  "Don’t let yesterday take up too much of today. – Will Rogers",
  "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
  "If you are working on something exciting, it will keep you motivated. – Elon Musk",
  "Success is not in what you have, but who you are. – Bo Bennett",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream bigger. Do bigger.",
  "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Your limitation—it’s only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Dream it. Wish it. Do it.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Little things make big days.",
  "It’s going to be hard, but hard does not mean impossible.",
  "Don’t wait for opportunity. Create it.",
  "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
  "The key to success is to focus on goals, not obstacles.",
  "Success is the sum of small efforts, repeated day in and day out. – Robert Collier",
  "Don’t be afraid to give up the good to go for the great. – John D. Rockefeller",
  "I find that the harder I work, the more luck I seem to have. – Thomas Jefferson",
  "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
  "Opportunities don’t happen, you create them. – Chris Grosser"
];


const quoteElement = document.getElementById("quote");
const button = document.getElementById("new-quote");

function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

button.addEventListener("click", () => {
  quoteElement.textContent = getRandomQuote();
});
// Smooth continuous background color change
const colors = ['#ff9a9e', '#fad0c4', '#a1c4fd', '#c2e9fb', '#d4fc79', '#96e6a1', '#fbc7a4', '#b28dff'];
let index = 0;

function changeBackground() {
  document.body.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
}

setInterval(changeBackground, 2000);  // Change every 2 seconds
changeBackground();  // Initial call
