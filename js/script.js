const menuBtn = document.querySelector(".menu-icon button");
const cartBtn = document.querySelector(".cart-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");

menuBtn.onclick = () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  cartBtn.classList.add("hide");
  cancelBtn.classList.add("show");
};

cancelBtn.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  cartBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
};
