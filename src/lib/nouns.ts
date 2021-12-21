const nouns = [
  "Analog",
  "Brain",
  "Calculator",
  "Device",
  "Mainframe",
  "Matrix",
  "Processor",
  "Stabilizer",
  "Superconductor",
  "Semiconductor",
  "Terminal",
];

export function getNoun() {
  let num: number = Math.floor(Math.random() * nouns.length);

  return nouns[num];
}

module.exports = getNoun;
