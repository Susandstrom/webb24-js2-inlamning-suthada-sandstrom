import { displayHighscores } from "./modules/gui";
import { getAllHighscores, addPlayers} from "./modules/scores";

//Datorn tänker på ett nummer
const correctNumber = Math.floor(Math.random()*3)+1;
console.log(correctNumber);
let playerPoints = 0;

//Hämta gissningarna till vår doc
const formEl = document.querySelector('form');

getAllHighscores().then(displayHighscores);

//event för submit
formEl.addEventListener('submit', event =>{
    event.preventDefault();

    const name = document.querySelector('#playersName').value;
    const score = document.querySelector('#userGuess').value;

    const playersToAdd = {name, score};
    addPlayers(playersToAdd);
});

const resultEl = document.querySelector('#highscoreContainer');
const userGuess = document.querySelector('input').value;

//1.Rätt svar, spelaren får 1 poäng för varje rätt svar och datorn tänker på ett nytt nummer
if(userGuess == correctNumber){
   playerPoints++
   resultEl.innerText = `Rätt! Du har ${playerPoints} poäng.`;

   //correctNumber = Math.floor(Math.random()*3)+1;
   console.log(correctNumber);


}

//fel svar! Jämför på highscorelista. 
else if(correctNumber !== userGuess){
    resultEl.innerText = `Din gissning var fel! Du fick ${playerPoints} poäng.`;
   
    //correctNumber = Math.floor(Math.random()*3)+1;
    console.log("Datorn tänker på nytt");

}

formEl.reset();