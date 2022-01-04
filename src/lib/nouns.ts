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
  "Array",
  "Probe",
  "Drive",
  "Cannon",
  "Recorder",
  "Transmitter",
  "Translator",
  "Field",
  "Shield",
  "Emitter",
  "Condenser",
  "Generator",
  "Rocket",
  "Digitizer",
  "Magnet",
  "Collector",
  "Hologram",
  "Automaton",
  "Robot",
  "Drone",
  "Android",
  "Machine",
  "Bot",
  "Droid",
];

export function getNoun() {
  let num: number = Math.floor(Math.random() * nouns.length);

  return nouns[num];
}

module.exports = getNoun;
