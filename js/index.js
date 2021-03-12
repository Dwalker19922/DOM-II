//* `mouseover`
let mouse = document.querySelector("nav");
let all = mouse.children
console.log("e",all)

all[0].addEventListener("mouseenter", function( event ) {
    event.target.style.color = "red";
    setTimeout(function() {
      event.target.style.color = "black";
    }, 800);
  }, false);

  all[1].addEventListener("mouseenter", function( event ) {
    event.target.style.color = "red";
    setTimeout(function() {
      event.target.style.color = "black";
    }, 800);
  }, false);

  all[2].addEventListener("mouseenter", function( event ) {
   
    event.target.style.color = "red";
        setTimeout(function() {
      event.target.style.color = "black";
    }, 800);
  }, false);

  all[3].addEventListener("mouseenter", function( event ) {
    event.target.style.color = "red";

    setTimeout(function() {
      event.target.style.color = "black";
    }, 800);
  }, false);
  
  //* `wheel`
  const sel = document.querySelector("img");
 const piczoom = sel
  piczoom.addEventListener("wheel",zoom)

  function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(1, scale), 1.1);
    piczoom.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  piczoom.onwheel = zoom;

  piczoom.addEventListener("wheel",zoom)

const sel2 = document.firstElementChild.querySelector(".img-content")
const img2 = sel2.firstElementChild
img2.addEventListener("wheel",zoom)

function zoom2(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(1, scale), 1.1);
    img2.style.transform = `scale(${scale})`;
  }
  img2.onwheel = zoom2;

  piczoom.addEventListener("wheel",zoom2)

  //* `keydown`

const color =document.querySelector(".interact")
color.style.margin=( "34%")
const change=document.getElementsByClassName("btn")
color.addEventListener("keydown", cc)
function cc(){
change[0].style.color="red",change[1].style.color="white",change[2].style.color="blue"
}
    
console.log("r",change)

// `load`
const t= document.getElementsByTagName("h2")
window.addEventListener('DOMContentLoaded', () => {
    t[0].style.color=("blue");
    t[0] = setTimeout(function(){ t[0].style.color=("black") }, 300);})

       console.log("d",t)
//* `focus`
const i = document.querySelector(".interact")
window.onload = function() {
    i.focus();
  };


  console.log(i)

//* `dblclick`
const c = document.querySelector('.btn');

c.addEventListener('dblclick', function () {
  c.textContent="you double clicked";
});

