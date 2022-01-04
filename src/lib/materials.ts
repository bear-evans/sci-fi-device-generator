const materials = [
  "Steel",
  "Unobtanium",
  "Titanium",
  "Hard Light",
  "Plasma",
  "Positron",
  "Electron",
  "Neutron",
  "Proton",
  "Neutrino",
  "Aluminum",
  "Condensate",
  "Adamantium",
  "Atmosphere",
  "Star",
  "Planet",
  "Void",
  "Matter",
  "Anti-Matter",
  "Radiation",
  "Sequence",
  "Gene",
  "Magnet",
  "Field",
  "Nucleus",
  "Particle",
  "Meteor",
  "Force",
  "Fire",
  "Space",
  "Time",
  "Spacetime",
  "Reality",
  "Universe",
  "Sound",
  "Acid",
  "Pressure",
  "Vacuum",
  "Gamma Ray",
  "X-Ray",
];

export function getMaterial() {
  let num: number = Math.floor(Math.random() * materials.length);

  return materials[num];
}

module.exports = getMaterial;
