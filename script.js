document.getElementById("get-data").addEventListener("click", function () {
  fetch("https://api.auroras.live/v1/?type=locations")
    .then((res) => res.json())
    .then((data) => console.log(data));
});
