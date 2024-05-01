var modImageHoverText = "Click to view on Steam!";
var modImages = document.getElementsByClassName("mod-image");
for (var i = 0; i < modImages.length; i++) {
  modImages[i].title = modImageHoverText;
}

var modEntries = document.querySelectorAll(".mod-align");
var i = 0;
while (modEntries.length > 0) {
  modEntries[0].className += "-" + (i % 2 === 0 ? "left" : "right");
  modEntries = Array.prototype.slice.call(modEntries, 1);
  i++;
}
