class Player {
    constructor(name, id){
        this.name = name;
        this.id = id;
        this.url = ""
    }

}

let playersArray = [];
let numberOfPlayers = 0;
let comparedItems = [];

let input = document.querySelector("input");
let buttons = document.getElementsByTagName("button");
let gameDiv = document.querySelector("#game");
let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");
let inputDiv = document.querySelector("#players-input");

//TODO v2: take all names at once, coma separated, let playerNames = input.value.split(",");


function createPlayer(e){
    e.preventDefault();    
    playersArray[numberOfPlayers] = new Player(input.value, numberOfPlayers);
    input.value=""; //clear value of HTML input box
    numberOfPlayers++;
}

function getImages(){

    const URL = `https://api.unsplash.com/photos/random?collections=162326&orientation=portrait&count=${numberOfPlayers}&client_id=_ktC7zSJN0MENN-G54GP9CWr_ZtKqSYTjinrZuNzugo`;

   fetch(URL)
   .then(function (response) {
        return response.json();
    })
    .then((data) => {
        data.forEach((element, index) => {
            playersArray[index].url = element.urls.small;
            //we add each of the images we fetched to our objects in the playersArray
        });
        console.log(playersArray);
        startGame();
    })
    .catch((error) => console.log("error" + error));
}


function startGame(){
    inputDiv.style.display="none";  //now we hide input div and show the images divs
    gameDiv.style.display = "flex";

    //we get two random numbers (from 0 to size of our playersArray)
    let i=getRandomNum(numberOfPlayers);
    let j=getRandomNum(numberOfPlayers);
    while(i===j)
    {   //if two random numbers are the same, try again and pick a different one
        j=getRandomNum(numberOfPlayers);
    }  
    //create the two image elements, with src obtained from the randomly selected objects
    player1.innerHTML = `<img src="${playersArray[i].url}" data-id="${playersArray[i].id}"/>`
    player2.innerHTML = `<img src="${playersArray[j].url}" data-id="${playersArray[j].id}"/>`

    comparedItems = [playersArray[i].id,playersArray[j].id];

    gameDiv.addEventListener("click", pickTempWinner);
}

function pickTempWinner(event) {

    let tempWinnerID = event.target.getAttribute("data-id"); //the id of the clicked image
    console.log(tempWinnerID);
    //the id of the other image (loser), we get this from the comparedItems array which stored the two IDs
    let loserID = (comparedItems[0]==tempWinnerID) ? comparedItems[1] : comparedItems[0]; 
    
    playersArray=playersArray.filter((item)=>item.id!=loserID); //remove the loser object
    numberOfPlayers--;

    console.log(playersArray);
    if(numberOfPlayers>1)
        startGame();
    else
        endGame();    
}

function endGame() {
    player2.remove();
    player1.innerHTML = `<img src="${playersArray[0].url}" data-id="${playersArray[0].id}"/>`
    let h1 = document.createElement("h1");
    h1.innerHTML= "The winner is....: " + playersArray[0].name;
    gameDiv.append(h1);
}

function getRandomNum(num){
    return Math.floor((Math.random() * num));
}
