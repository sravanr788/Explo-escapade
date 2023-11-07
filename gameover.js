var winStatus = document.getElementById("win-status")
var SuggestionBox = document.getElementById("suggestion")

// Getting status , name and nickname from the local storage as they are previously set
var status = localStorage.getItem("status")
var name = localStorage.getItem("name")
var nickName = localStorage.getItem("nickname")
console.log(name)
console.log(status)

// if(status=="won"){
//     winStatus.textContent="You Won!"
//     SuggestionBox.textContent = `Congratulations! ${nickName} You did well in this mission.`
// } else if (status=="lose") {
//     winStatus.textContent = "You Lose!"
//     SuggestionBox.textContent = `Don't Worry ${nickName}! Try to complete the game using hints `
// }else if(status=="tie"){
//     winStatus.textContent = "Its a tie"
//     SuggestionBox.textContent = `Agent ${nickName} ! . You were alomst close to acheive your goal .`
// }

// array of winning phrases
const winningPhrases = [
    `Congratulations, ${nickName}! You're a master bomb evader!`,
    `Mission accomplished, ${nickName}!`,
    `Impressive work, ${nickName}! You've emerged victorious!`,
    `Well done, ${nickName}! You've defused all the bombs!`,
];

// array of losing phrases
const losingPhrases = [
    `Mission failed, ${nickName}.`,
    `Better luck next time, ${nickName}!`,
    `You were close, ${nickName}, but not close enough.`,
    `The enemy prevails this time, ${nickName}.`,
];

// Function to select a random phrase from one of array
function getRandomPhrase(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Modify your existing code to display random phrases
if (status=="won") {
    winStatus.textContent = `You Won, ${name}!`;
    SuggestionBox.textContent = getRandomPhrase(winningPhrases);
} else if (status=="lose") {
    winStatus.textContent = `You Lose, ${name}!`;
    SuggestionBox.textContent = getRandomPhrase(losingPhrases);
} else if (status=="tie") {
    winStatus.textContent = `It's a tie, ${name}`;
    SuggestionBox.textContent = `Keep pushing, Agent ${nickName}!`;
}
