//* `drag / drop`
// resources 
const header = document.querySelector(".logo-heading");
const nav =document.querySelector(".main-navigation");
const intro= document.querySelector(".intro");
const intimg=intro.firstElementChild;
const h2= intimg.nextElementSibling;
h2.textContent="Welcome To Fun Bus! double click me!"
const input =document.createElement("input");
intro.appendChild(input);
const input2 =document.createElement("input");
intro.appendChild(input2);
const input3 =document.createElement("input");
intro.appendChild(input3);
input3.value="SELECT ME!!!!!!!!!!!";
input2.value="COPY ME!!!!!!!!!!!";
input2.style.marginLeft="2%"
input.placeholder="press any key too change color";
console.log(input);
let scale = 1;
const item = document.querySelectorAll("a");

const ld= document.createElement("h4");
//FUNCTIONS

function h1def(element){header.style.color=""};

function h2def(element){h2.style.color="";
//h2.textContent="Welcome To Fun Bus!"
};

function loadedDef(){
    nav.removeChild(ld)
};

function focusDef(){
    input.style.background = ''
};

function navDef(){
    nav.style.backgroundColor=""
}

function mouse(){
    header.style.color="red";
    setTimeout(h1def,1000);
};

function inputf (){
h2.style.color="blue";
setTimeout(h2def,1000);
};

function zoom(event) {
    event.preventDefault();
  
    if (event.deltaY < 0) {
      scale *= event.deltaY * -2;
    }
    else {
      scale /= event.deltaY * 2;
    };
    scale = Math.min(Math.max(1, scale), 1.5);
    intimg.style.transform = `scale(${scale})`;
  };

  function loaded(){
     ld.textContent="DOM LOADED"
     ld.style.margin="40%";
     ld.style.marginTop="-5%";
     ld.style.color="green";
     nav.appendChild(ld);
     setTimeout(loadedDef,1000);
     
 };
 function resizef(){
    ld.textContent="YOU RESIZED WINDOW"
    ld.style.margin="40%";
    ld.style.marginTop="-5%";
    ld.style.color="red";
    nav.appendChild(ld);
    setTimeout(loadedDef,1000);
    
};
  function inptfocus(){
    input.style.background = 'pink'
    setTimeout(focusDef, 1000)
    input.preventDefault()
  };

  function navchange(){
    nav.style.backgroundColor="red";
    setTimeout(navDef, 1000)
    header.preventDefault()

  };

  function alrt(){
    alert("YOU SELECTED SOME TEXT");
  };

  function alrt2(){
    alert("YOU COPIED SOME TEXT");
  };

  function dbl(){
    h2.textContent="YOU DOUBLE CLICKED"
    setTimeout(h2def,1000)
    h2.preventDefault()
  }
//LISTENERS
header.addEventListener("mouseover",mouse);
input.addEventListener("keydown",inputf);
intimg.addEventListener("wheel",zoom);
window.addEventListener("load",loaded);
input.addEventListener("focus",inptfocus);
window.addEventListener("resize",resizef)
window.addEventListener("scroll",navchange)
input2.addEventListener('select',alrt)
input3.addEventListener("copy",alrt2)
h2.addEventListener("dblclick",dbl);
nav[0,1,2,3].preventDefault()
