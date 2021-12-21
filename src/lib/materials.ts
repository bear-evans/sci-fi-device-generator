const materials = ["Steel", "Unobtanium", "Titanium", "Hard Light", "Plasma"];

export function getMaterial() {
  let num: number = Math.floor(Math.random() * materials.length);

  return materials[num];
}

module.exports = getMaterial;
