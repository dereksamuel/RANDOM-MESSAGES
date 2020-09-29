const messages = [
  "Hello world",
  "Good morning",
  "Good evening",
  "Good Night",
  "What is your name Pedro?",
  "How are you?"
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
}

module.exports = { randomMsg }
