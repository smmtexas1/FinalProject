window.onload = function() {
  setTabIndex();
  console.log("tabindex set");
}

function upDate(previewPic) {
  const imageContainer = 
  document.getElementById("image");
  imageContainer.style.backgroundImage = `url(${previewPic.src})`;
  imageContainer.textContent = previewPic.alt;
  console.log("tabindex");
}

function unDo() {
  const imageContainer = 
  document.getElementById("image");
  imageContainer.style.backgroundImage = ""; // Replace with original background image URL from CSS
  imageContainer.textContent = "Hover over an image below to display here.";
}


function focusImage(previewPic) {
  previewPic.style.border = "15px solid rgb(255,215,0)";
  console.log("focused on image:", previewPic.alt);
  const imageContainer = 
  document.getElementById("image");
  imageContainer.style.backgroundImage = `url(${previewPic.src})`;
  imageContainer.textContent = previewPic.alt;  
}

function blurImage(previewPic) {
  previewPic.style.border = "10px solid rgb(3,255,234)";
  const imageContainer = 
  document.getElementById("image");
  imageContainer.style.backgroundImage = ""; // Replace with original background image URL from CSS
  imageContainer.textContent = "Hover over an image below to display here.";
  console.log("tabindex");  
}

function setTabIndex() {
  const images = document.querySelectorAll(".preview");
  for (let i = 0; i < images.length; i++) {
    images[i].tabindex = i + 1; // Assign tabindex sequentially starting from 1
    images[i].addEventListener("focus", () => focusImage(images[i]));
    images[i].addEventListener("blur", () => blurImage(images[i]));
  }
}