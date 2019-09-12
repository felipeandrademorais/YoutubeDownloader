var convertBtn = document.querySelector(".convert-button");
var URLinput = document.querySelector(".URL-input");

convertBtn.addEventListener("click", () => {
  sendURL(URLinput.value);
});

function sendURL(URL) {
  window.location.href = `http://localhost:4000/download?URL=${URL}`;
}
