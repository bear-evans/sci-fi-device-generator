const deviceGenerator = function () {
  const nouns = [];
  const verbs = [];
  const adjectives = [];
  const materials = [];

  function init() {
    console.log("Device Generator Initialized");
  }

  return {
    init: init,
  };
};
