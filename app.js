const card = document.querySelector("section");
const cardMatch = document.querySelector("#matches")
//........................................................

// Declare an empty array to hold the result

let matchResults = []
let currentMatches = 0;
//DEFINE FUNCTIONS

const handleCardClicked=(e)=> {
 
  if (e.target.classList.contains("flip-card-front"))  {
    e.target.parentElement.parentElement.classList.add("clicked");
    matchResults.push(e.target.parentElement.parentElement.classList[1]);
    if (matchResults.length >= 2) {
      //Check to see if there's a match
      if (matchResults[0] === matchResults[1]) {
        setTimeout (() => {
          alert("🔥Success Match!!");
        }, 1000);
        currentMatches+=1
        cardMatch.innerText = currentMatches
      }else {
        const clickedElements = document.querySelectorAll(".clicked")
        for ( let element of clickedElements) {
          element.classList.remove("clicked");
        }
        if (matchResults[0] !== matchResults[2]) {
          setTimeout (() => {
            alert("😋Try Again!!");
          }, 1000);
        }
      }
      matchResults = []
    }
  // console.log(matchResults);
  } 

}


// Add Event Listeners

card.addEventListener("click", handleCardClicked);


// TIME COUNTDOWN
const startingMinutes = 10;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("#count");

setInterval(updateCountdown, 1000);

function updatedCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

countdownEl.innerHTML = `${minutes}: ${seconds}`;
time--;
}


