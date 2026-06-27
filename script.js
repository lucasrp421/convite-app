const opening = document.getElementById("opening");
const videoScreen = document.getElementById("videoScreen");
const inviteScreen = document.getElementById("inviteScreen");

const envelope = document.getElementById("envelope");
const video = document.getElementById("openingVideo");

const presentBtn = document.getElementById("presentBtn");
const dressBtn = document.getElementById("dressBtn");

const modalPresent = document.getElementById("modalPresent");
const modalDress = document.getElementById("modalDress");

envelope.addEventListener("click", () => {
    opening.classList.remove("active");
    videoScreen.classList.add("active");
    video.play();
});

video.addEventListener("ended", () => {
    videoScreen.classList.remove("active");
    inviteScreen.classList.add("active");
});

presentBtn.onclick = () => {
    modalPresent.style.display = "flex";
};

dressBtn.onclick = () => {
    modalDress.style.display = "flex";
};

modalPresent.onclick = () => modalPresent.style.display = "none";
modalDress.onclick = () => modalDress.style.display = "none";
