const prompts = [
  "Oh no, the aliens took our...",
  "The day has been saved by the...",
  "The solar flare damaged our ...",
  "The only thing that can stop the robot army is our...",
];

export function getPrompt() {
  let num: number = Math.floor(Math.random() * prompts.length);

  return prompts[num];
}

module.exports = getPrompt;
