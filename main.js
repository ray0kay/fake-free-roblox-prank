// lol who would actually fall for this
// and actually think they got free robux

// Get all the prices
const price = document.querySelectorAll(".price-tag");

// Change it to green and make the text 0
price.forEach((text) => {
  text.style.color = "lawngreen";
  text.textContent = "$0.00";
});

// Get all the buy buttons
const btns = document.querySelectorAll(".btn-full-width");

function btnClick(btn) {
  const reward = btn.querySelector("h4");
  const robux = document.querySelector("#nav-robux-amount");
  const result = `${
    parseInt(reward.textContent.replace(/,/g, "")) + parseInt(robux.textContent.replace(/,/g, ""))
  }`;
  robux.textContent = result;
}

btns.forEach((btn) => {
  const clone = btn.cloneNode(true);
  btn.parentNode.replaceChild(clone, btn);
  clone.onclick = () => btnClick(clone);
});

function fakeAppeal() {
  document.body.innerHTML = ``;
  const heading = document.createElement("h1");
  heading.innerHTML = `Whoopsies!<br>`;
  heading.style.position = "absolute";
  heading.style.top = "2vh";
  heading.style.left = "50%";
  heading.style.transform = "translateX(-50%)";
  heading.style.color = "red";
  document.body.appendChild(heading);
  const subheading = document.createElement("h2");
  subheading.innerHTML = `
      Looks like something went wrong.<br>
      Come back another time.
      `;
  subheading.style.position = "absolute";
  subheading.style.top = "10vh";
  subheading.style.left = "50%";
  subheading.style.transform = "translateX(-50%)";
  subheading.style.color = "white";
  document.body.appendChild(subheading);
}

const premiumBotton = document.querySelector(".get-premium-button");
const clone = premiumBotton.cloneNode(true);
premiumBotton.parentNode.replaceChild(clone, premiumBotton);
clone.onclick = fakeAppeal;

function rng(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const prankInterval = setInterval(() => {
  const robux = document.querySelector("#nav-robux-amount");
  if (parseInt(robux.textContent.replace(/,/g, "")) >= rng(48000, 1000000)) {
    const container = document.querySelector(".container-main");
    container.style.display = "none";

    robux.textContent = 0;

    const username = document.querySelector(".age-bracket-label-username");
    username.style.color = "red";
    username.textContent = "SUSPENDED";

    const avatarSpan = document.querySelector(".avatar-card-image");
    const avatar = avatarSpan.querySelector("img");

    // Workaround for CSP, converted the image to Base64

    const base64Image =
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAB4AHgDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAr/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCadYTwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k=";
    avatar.src = base64Image;

    const banner = document.createElement("div");
    banner.textContent = `
    Roblox Notification:
    Roblox has detected hacking for Robux.
    Hacking is a violation against our TOS.
    Due to this, we have suspended your account
    for 1 week and have revoked all your Robux.
    Thank you for your cooperation b*tch.
    `;
    banner.style.position = "fixed";
    banner.style.top = "20px";
    banner.style.left = "50%";
    banner.style.transform = "translateX(-50%)";
    banner.style.background = "black";
    banner.style.color = "red";
    banner.style.padding = "20px";
    banner.style.fontSize = "24px";
    banner.style.border = "2px solid red";
    banner.style.zIndex = "9999";
    document.body.appendChild(banner);

    const timer = document.createElement("h1");
    const endTime = Date.now() + 7 * 24 * 60 * 60 * 1000;

    timer.style.position = "absolute";
    timer.style.top = "60vh";
    timer.style.left = "50%";
    timer.style.transform = "translateX(-50%)";
    timer.style.zIndex = "9999";

    document.body.appendChild(timer);

    function updateTimer() {
      const currentTime = Date.now();
      const distance = endTime - currentTime;

      if (distance === 0) {
        location.reload();
      }

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Re-editing initialized variables for readability and simplicity

      days = String(days).padStart(2, "0");
      hours = String(hours).padStart(2, "0");
      minutes = String(minutes).padStart(2, "0");
      seconds = String(seconds).padStart(2, "0");

      const currentText = `${days}:${hours}:${minutes}:${seconds}`;

      timer.textContent = currentText;
    }

    setInterval(updateTimer, 25);

    const appeal = document.createElement("a");
    appeal.textContent = "APPEAL HERE";
    appeal.style.position = "fixed";
    appeal.style.bottom = "100px";
    appeal.style.left = "50%";
    appeal.style.transform = "translateX(-50%)";
    appeal.style.fontSize = "32px";
    appeal.style.fontWeight = "bold";
    appeal.style.color = "white";
    appeal.style.background = "red";
    appeal.style.padding = "10px 20px";
    appeal.style.zIndex = "9999";
    appeal.style.textDecoration = "none";
    appeal.style.borderRadius = "8px";
    appeal.addEventListener("click", (event) => {
      event.preventDefault();
      fakeAppeal();
    });

    document.body.appendChild(appeal);
  }
}, 100);
