// ========================================================
// helper functions
// ========================================================
const rancolor = () => {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}

const genraterandomcolors = (num) => {
  let output = []
  for (var i = 0; i < num; i++) {
    output.push(rancolor())
  }
  return output
}

const pickColor = () => {
  // select random number from 0-5
  const random = Math.floor(Math.random() *colors.length)
  // return color of that random number colors[ran]
  return colors[random]
}

const changecolor = (color) => {
  if (numsquares == 3) {
    for (let i = 0; i < 3; i++) {
      squares[i].style.backgroundColor = color;
    }
  }
  else {
    for (let i = 0; i < 6; i++) {
      squares[i].style.backgroundColor = color;
    }
  }
}

const reset = () => {
  colors = genraterandomcolors(numsquares);
  pickedcolor = pickColor();
  resetButton.textContent = "New Colors";
  cd.textContent = pickedcolor;
     for (let i = 0; i < squares.length; i++) {
       if (colors[i]) {
        squares[i].style.backgroundColor = colors[i]
       }
       else {
         // squares[i].style.display = "none";
         squares[i].style.backgroundColor = "black";
       }
     }
     title.style.backgroundColor = "steelblue";
     message.textContent = "";
}

// ====================================================
// init variables
// ===================================================

// state
let numsquares = 6;
let colors = genraterandomcolors(numsquares)
let pickedcolor = pickColor();

// select element
const squares = document.querySelectorAll(".square");
const cd = document.getElementById("colordisplay");
const message =   document.getElementById("message");
const title = document.querySelector("h1");
const resetButton = document.getElementById("resetb");
const modebutton = document.querySelectorAll(".mode");


// ====================================================
// main
// ===================================================

function main() {
  // update color display
      cd.textContent = pickedcolor;
      resetButton.addEventListener("click", reset)

      modebutton.forEach((button) => {
          button.addEventListener("click", function() {
            modebutton[0].classList.remove("selected");
            modebutton[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
              numsquares = 3;
            }
            else {
              numsquares = 6;
            }
            reset()
          })
      })

      // set up colors
      for(let i = 0;i<squares.length;i++) {
        squares[i].style.background = colors[i];
        squares[i].addEventListener("click", function()  {
          const clickedcolor = this.style.backgroundColor;
          if (clickedcolor===pickedcolor) {
            message.textContent = "correct!"
            changecolor(pickedcolor)
            title.style.backgroundColor = pickedcolor;
            resetButton.textContent = "Play again?"
          }
          else if (clickedcolor!==pickedcolor) {
            this.style.backgroundColor = "black";
            message.textContent = "Try again!"
          };
        });
      };
}

main();
