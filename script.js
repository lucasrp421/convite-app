window.onload = () => {
  document.getElementById("loading").style.display = "none";
};

const opening = document.getElementById("opening");
const videoScreen = document.getElementById("videoScreen");
const invite = document.getElementById("invite");

const envelope = document.getElementById("envelope");
const video = document.getElementById("openingVideo");
const music = document.getElementById("bgMusic");

envelope.addEventListener("click", () => {
  opening.classList.remove("active");
  videoScreen.classList.add("active");

  music.play();
  video.play();
});

video.addEventListener("ended", () => {
  videoScreen.classList.remove("active");
  invite.classList.add("active");
});

const presentBtn = document.getElementById("presentBtn");
const dressBtn = document.getElementById("dressBtn");

const presentModal = document.getElementById("presentModal");
const dressModal = document.getElementById("dressModal");

presentBtn.onclick = () => presentModal.style.display = "flex";
dressBtn.onclick = () => dressModal.style.display = "flex";

document.querySelectorAll(".close").forEach(btn => {
  btn.onclick = () => {
    presentModal.style.display = "none";
    dressModal.style.display = "none";
  };
});