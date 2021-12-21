const deviceGenerator = (function () {
  function init() {
    console.log("init");
    $("#device-button").on("click", handleClick);
  }

  function handleClick(event: JQuery.Event) {
    event.preventDefault();
    console.log("Clicky clicky");
  }

  return {
    init: init,
  };
})();

deviceGenerator.init();
