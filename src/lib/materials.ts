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
];

export function getMaterial() {
  let num: number = Math.floor(Math.random() * materials.length);

  return materials[num];
}

module.exports = getMaterial;
