let buttonElement = document.getElementById("toggle-button");

window.addEventListener("load", doStartup, false);
buttonElement.addEventListener("click", requestFullScreen, false);

function doStartup(event) {
  document.fullscreenElement =
    document.fullscreenElement ||
    document.mozFullscreenElement ||
    document.msFullscreenElement ||
    document.webkitFullscreenDocument;
  document.exitFullscreen =
    document.exitFullscreen ||
    document.mozExitFullscreen ||
    document.msExitFullscreen ||
    document.webkitExitFullscreen;

  if (!document.fullscreenEnabled) {
    buttonElement.classList.add("hidden");
  } else {
    console.log("Your browser cannot use fullscreen right now");
  }
}

function requestFullScreen() {
  let elem = document.getElementById("buck-video");

  elem.requestFullscreen =
    elem.requestFullscreen ||
    elem.mozRequestFullscreen ||
    elem.msRequestFullscreen ||
    elem.webkitRequestFullscreen;

  if (!document.fullscreenElement) {
    elem
      .requestFullscreen()
      .then(() => {
        console.log("Full screen enabled!");
      })
      .catch((err) => {
        alert(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
  }
}
