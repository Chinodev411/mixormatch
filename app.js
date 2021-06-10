//CACHED DOM ELEMENTS

const card = document.querySelector("section");

const flipCard = document.querySelector("#clickflip");

const flipReveal = document.querySelector("#revealFlip");


//CREATE AN ARRAY OF MATCHING CARDS


let successMatch = [
  [0, 15],
  [1, 11],
  [2, 10],
  [3, 14],
  [4, 8],
  [5, 9],
  [6, 14],
  [17, 12],
  [13, 16]
]
 


//DEFINE FUNCTIONS

const handleCardClicked=(e)=> {
  // console.log("Hello from the clicked card");
if (e.target.classList.contains("flip-card-front"))  {
  e.target.parentElement.parentElement.classList.add("clicked");
  console.log(e.target.parentElement.parentElement.classList);
} 

}


// Add Event Listeners

card.addEventListener("click", handleCardClicked);













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