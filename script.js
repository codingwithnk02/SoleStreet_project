document.getElementById("myForm").onsubmit = function (e) {
  e.preventDefault();
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value.trim();
  var message = document.getElementById("formMessage");

  if (name === "" || email === "" || password === "") {
    message.innerHTML = "Please fill all fields.";
    message.style.color = "red";
  } else if (!email.includes("@") || !email.includes(".")) {
    message.innerHTML = "Enter a valid email.";
    message.style.color = "red";
  } else if (password.length < 6) {
    message.innerHTML = "Password must be at least 6 characters.";
    message.style.color = "red";
  } else {
    message.style.color = "green";
    message.innerHTML = "Form submitted successfully!";
  }
};

let slideIndex = 0;
const slides = document.getElementsByClassName("slider-image");
showSlide(slideIndex);

function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index].style.display = "block";
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

let countdownMinutes = 5;
let countdownTime = new Date().getTime() + countdownMinutes * 60000;

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownTime - now;

  if (distance < 0) {
    document.getElementById("countdown").innerText = "00:00";
    return;
  }

  let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let secs = Math.floor((distance % (1000 * 60)) / 1000);

  mins = mins.toString().padStart(2, "0");
  secs = secs.toString().padStart(2, "0");

  document.getElementById("countdown").innerText = `${mins}:${secs}`;
}

setInterval(updateCountdown, 1000);
updateCountdown();


document.getElementById("toggleMode").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const cards = document.querySelectorAll(".shoe-card");

  cards.forEach((card) => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(query) ? "block" : "none";
  });
});
