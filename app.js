function generate() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let color = `rgb(${red},${green},${blue})`;
  return color;
}
let box = document.querySelector(".box");
let para = document.createElement("h2");
para.style.textAlign = "center";
box.insertAdjacentElement("beforebegin", para);

let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  let colour = generate();
  box.style.backgroundColor = `${colour}`;

  para.innerText = `${colour}`;
});
