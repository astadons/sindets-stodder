const btn_open = document.querySelector("#cta_open1");
const btn_close = document.querySelector("#close_btn");

btn_open.addEventListener("click", openModal);
btn_close.addEventListener("click", closeModal);

function openModal() {
  console.log("der er klikket");
  document.querySelector("#dialog1").classList.add("fadeIn");
  document.querySelector("#dialog1").showModal();
}

function closeModal() {
  document.querySelector("#dialog1").closest();
}
