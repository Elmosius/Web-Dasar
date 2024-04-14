/* Nama team = Celvin's (Case Elmo Kevin'  Store)
    Tema =  Small-Medium Enterprise (Jual Case HP)
    Member :
    1. 2272008 - Elmosius Suli
    2. 2272007 - Kevin Owen
*/

// navbar

const navbar1 = document.querySelector(".navbar-index-product ");

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 100) {
    navbar1.classList.add("active");
  } else {
    navbar1.classList.remove("active");
  }
};

// cart

function preLoad() {
  a1 = new Image();
  a1.src = "https://lzd-img-global.slatic.net/g/p/6fcd867fe71caf2d1c08bd43214a807f.jpg_2200x2200q80.jpg_.webp";
  a2 = new Image();
  a2.src = "https://lzd-img-global.slatic.net/g/p/27f055d47c78818f00cd33613e382851.jpg_2200x2200q80.jpg_.webp";
  a3 = new Image();
  a3.src = "https://i.etsystatic.com/25926642/r/il/de8b6d/3023542666/il_fullxfull.3023542666_iczw.jpg";

  b1 = new Image();
  b1.src = "https://id-live-01.slatic.net/p/cc8763a6613530eb30082ca83e1d1ebc.jpg";
  b2 = new Image();
  b2.src = "https://www.case-custom.com/media/catalog/product/cache/custom-iphone-13-pro-max-case_4-image-1000x1000/10046092-japanese-woman-custom-iphone-13-pro-max-case_4.jpg";
  b3 = new Image();
  b3.src = "https://i.ebayimg.com/images/g/jJYAAOSwejhjh0NA/s-l500.jpg";

  c1 = new Image();
  c1.src = "https://i.ebayimg.com/images/g/gDwAAOSw5YVf7hF9/s-l500.jpg";
  c2 = new Image();
  c2.src = "https://cf.shopee.co.id/file/9ff3cc193946b75e13af32ce21e6551c";
  c3 = new Image();
  c3.src = "https://d1flfk77wl2xk4.cloudfront.net/Assets/53/914/l_p0143291453.jpg";

  d1 = new Image();
  d1.src = "https://cf.shopee.co.id/file/7765167b0076636743d64ee446dd4d25";
  d2 = new Image();
  d2.src = "https://www.jakartanotebook.com/images/products/61/63/24868/2/slim-hard-case-for-iphone-6-or-6s-black-82.jpg";
  d3 = new Image();
  d3.src = "https://lzd-img-global.slatic.net/g/p/ff5c374f2fbcfd0a1b947d472cc670b7.jpg_720x720q80.jpg_.webp";
}
function im(image) {
  document.getElementById(image[0]).src = eval(image + ".src");
}
