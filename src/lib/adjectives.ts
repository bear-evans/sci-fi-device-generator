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
  "Wierd",
  "Amazing",
  "Strange",
  "Cosmic",
  "Animated",
  "Digital",
  "Gravitic",
  "Magnetic",
  "Electromagnetic",
  "Cloning",
  "Stellar",
  "Lunar",
  "Terrestrial",
  "Agglomerating",
  "Teleoperated",
  "Remote",
  "Dense",
  "Conceptual",
  "Theoretical",
  "Genetic",
  "Fundamental",
];

export function getAdjective() {
  let num: number = Math.floor(Math.random() * adjectives.length);

  return adjectives[num];
}

module.exports = getAdjective;
