/* Nama team = Celvin's (Case Elmo Kevin'  Store)
    Tema =  Small-Medium Enterprise (Jual Case HP)
    Member :
    1. 2272008 - Elmosius Suli
    2. 2272007 - Kevin Owen
*/

// navbar

const navbar = document.querySelector(".navbar-index ");

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 100) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
};

// contactus

const scriptURL = "https://script.google.com/macros/s/AKfycbzct4MZke0XdpweVrECM2HII_lL_hrPgJHWzLdDJBS_3B8VKBbPrQ1MvhefmyG4xOkfwA/exec";
const form = document.forms["wpu-contact-form"];
const kirim = document.querySelector(".btn-kirim");
const loading = document.querySelector(".btn-loading");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //sebelum
  loading.classList.toggle("d-none");
  kirim.classList.toggle("d-none");

  // sesudah
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      loading.classList.toggle("d-none");
      kirim.classList.toggle("d-none");
      console.log("Success!", response);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
