//CACHED DOM ELEMENTS

const card = document.querySelector("section");

const flipCard = document.querySelector("#clickflip");

const flipReveal = document.querySelector("#revealFlip");

// const frogClass = document.querySelector("frog-class");
//........................................................//

let flip


//CREATE AN ARRAY OF MATCHING CARDS


// let successMatch = [
//   [0, 15],
//   [1, 11],
//   [2, 10],
//   [3, 14],
//   [4, 8],
//   [5, 9],
//   [6, 14],
//   [17, 12],
//   [13, 16]
// ]


 
// Declare an empty array to hold the result 
let matchResults = []

//function for capturing the user click

// const matchClick=()=> {
// if (successMatch[0] === true);
// console.log("matched");
// }

// const matchClick=()=> {
//   if (frogClass === true)
//   return "matched";
// }
   // if the array has 2 element in it
       // check to see if the elements are the same 
           // if they are = its a match
           // else then flip the cards back over (remove the clicked class)
    // other wise
       // get the elements class ("frog") and add it to the array




//DEFINE FUNCTIONS

const handleCardClicked=(e)=> {
 
  if (e.target.classList.contains("flip-card-front"))  {
    e.target.parentElement.parentElement.classList.add("clicked");
    matchResults.push(e.target.parentElement.parentElement.classList[1]);
    if (matchResults.length >= 2) {
      //Check to see if there's a match
      if (matchResults[0] === matchResults[1]) {
        setTimeout (() => {
          alert("it's a match");
        }, 1000);
      }else {
        const clickedElements = document.querySelectorAll(".clicked")
        for ( let element of clickedElements) {
          element.classList.remove("clicked");
        }
      }
      matchResults = []
    }
  // console.log(matchResults);
  } 

}


// Add Event Listeners

card.addEventListener("click", handleCardClicked);






//Increment the match  === Match

//








//DOM CARD MATCHING

// const nameFlipFroglet = document.querySelector("#nameflipfroglet");

// const imageRevealFrog = document.querySelector("#imagerevealfrog");

// console.log(nameFlipFroglet);

//FUNCS

// const onClickFlip = () => {
//   console.log(flipReveal);
// }

// flipCard.addEventListener("click", onClickFlip);

//ARRAY