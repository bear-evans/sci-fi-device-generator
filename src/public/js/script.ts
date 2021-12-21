const deviceGenerator = (function () {
  let promptText = $("#prompt-text");
  let deviceText = $("#device");

  function init() {
    console.log("init");
    $("#device-button").on("click", handleClick);
  }

  async function handleClick(event: JQuery.Event) {
    event.preventDefault();

    const response = await fetch("/api/devices/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    console.log(result);
    deviceText.text(result.device);
    promptText.text(result.prompt);
  }

  return {
    init: init,
  };
})();

deviceGenerator.init();
