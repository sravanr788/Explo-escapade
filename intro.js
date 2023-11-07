// Geting the input names
var nameInput = document.getElementById('name');
var nicknameInput = document.getElementById('nickname');

// function for storing the name and nickname in local storage
function storeNameAndNickname() {
    // Getting the values entered by the user
    var name = nameInput.value;
    var nickname = nicknameInput.value;

 
        // Storing the values in local storage
        localStorage.setItem("  name", name);
        localStorage.setItem("nickname", nickname);
}

// Attaching a click event listener to the "Start Game" button
var startButton = document.querySelector('.start-btn');

startButton.addEventListener('click',()=>{
    location.href="./game.html";
    storeNameAndNickname()
}
);
