$(function () {
  $('a[href="#search"]').on('click', function(event) {
      event.preventDefault();
      $('#search').addClass('open');
      $('#search > form > input[type="search"]').focus();
  });
  
  $('#search, #search button.close').on('click keyup', function(event) {
      if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
          $(this).removeClass('open');
      }
  });
});

const menuBtn = document.querySelector(".menu-icon button");
const cartBtn = document.querySelector(".cart-icon");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");

menuBtn.onclick = () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.style.display = "none";
  cartBtn.classList.add("hide");
  cancelBtn.classList.add("show");
};

cancelBtn.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.style.display = "block";
  cartBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
};
