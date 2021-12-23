const adjectives = [
  "Adding",
  "Stabilizing",
  "Subtracting",
  "Lambent",
  "Superconductive",
  "Semiconductive",
  "Relative",
  "Cloaking",
  "Impulse",
  "Universal",
  "Positronic",
  "Photonic",
  "Electronic",
  "Quantum",
  "Holographic",
  "Emissive",
  "Condensed",
];

export function getAdjective() {
  let num: number = Math.floor(Math.random() * adjectives.length);

  return adjectives[num];
}

module.exports = getAdjective;
