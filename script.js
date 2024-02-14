let currentPosition = 0;
const bikeContainer = document.querySelector(".bike-container");
const bikeItems = document.querySelectorAll(".bike-item");

function beli() {
  alert("Terima kasih telah membeli sepeda!");
}

function slide(direction) {
  const containerWidth = document.querySelector(".container").offsetWidth;
  const itemWidth =
    bikeItems[0].offsetWidth +
    parseInt(getComputedStyle(bikeItems[0]).marginRight);
  const maxPosition = (bikeItems.length - 1) * itemWidth;

  if (direction === "next" && currentPosition > -maxPosition) {
    currentPosition -= itemWidth;
  } else if (direction === "prev" && currentPosition < 0) {
    currentPosition += itemWidth;
  }

  bikeContainer.style.transform = `translateX(${currentPosition}px)`;
}

document
  .querySelector(".prev-btn")
  .addEventListener("click", () => slide("prev"));
document
  .querySelector(".next-btn")
  .addEventListener("click", () => slide("next"));

// Fungsi untuk menampilkan gambar dalam modal
function showImage(imageSrc) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = imageSrc;
}

// Fungsi untuk menutup modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
