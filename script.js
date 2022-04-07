const firstitem = document.querySelector(".text-item-1").attributes[1].value;
const seconditem = document.querySelector(".text-item-2").attributes[1].value;

function firstFunction() {
  document.querySelector(".text-item-1").attributes[1].value = seconditem;
  document.querySelector(".text-item-2").attributes[1].value = firstitem;
}
