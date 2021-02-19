//<i class="far fa-circle"></i>
//<i class="fa fa-times" aria-hidden="true"></i>
//<script src="https://kit.fontawesome.com/a076d05399.js"></script>

// Selecting All "Starting Page" Tags
let startingpage = document.querySelector(".startingpage");
let choose = document.querySelectorAll(".choose");

// Selecting All "Main Page" Tags
let mainpage = document.querySelector("#mainpage");
let showchange = document.querySelector("#showchange");
let boxes = document.querySelectorAll(".boxes");

// Selecting All "Winner Page" Tags
let winner = document.querySelector("#winner");
let winnername = document.querySelector("#winnername");
let quit = document.querySelector("#quit");

// How Can We Change Turns
// False => X's Turn
// True => O's Turn
let changeTurn = null;


// Select Which You Want To Be>
// X or O
choose.forEach(chooseNow => {
    chooseNow.addEventListener("click", () => {
        if (chooseNow.id === "playerX") {
            changeTurn = false;
            // console.log(changeTurn);
            showchange.style.left = `0px`;
        } else {
            changeTurn = true;
            // console.log(changeTurn);
            showchange.style.left = `160px`;
        }
        startingpage.style.display = "none";
        mainpage.style.display = "block";
    })
});

boxes.forEach(items => {
    items.addEventListener("click", () => {
        // Add "X" Icon If "ChangeTurn" = False
        // Add "O" Icon If "ChangeTurn" = True
        if (changeTurn == false) {
            items.innerHTML = `<i class="fas fa-times"></i>`;
            items.id = "X";
            items.style.pointerEvents = "none";
            showchange.style.left = `160px`;

            // change The "changeTurn" Value False Into True
            changeTurn = true;
        } else {
            items.innerHTML = `<i class="far fa-circle"></i>`;
            items.id = "O";
            items.style.pointerEvents = "none";
            showchange.style.left = `0px`;

            // change The "changeTurn" Value False Into True
            changeTurn = false;
        }
        winningFunc();
        drawFunc();
    })
})

// All Possible Winning Combinations
let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let winningFunc = () => {
    for (let a = 0; a <= 7; a++) {
        let b = winningCombinations[a];
        // console.log(b);

        if (boxes[b[0]].id == "" || boxes[b[1]].id == "" || boxes[b[2]].id == "") {
            continue;
        } else if (boxes[b[0]].id == "X" && boxes[b[1]].id == "X" && boxes[b[2]].id == "X") {
            // console.log("X is The Winner");

            // Adding Winner text
            winnername.innerText = `Player X Wins The Game!`;

            // show "Winner Page" & Hide "Mai Page"
            mainpage.style.display = "none";
            winner.style.display = "block";
        } else if (boxes[b[0]].id == "O" && boxes[b[1]].id == "O" && boxes[b[2]].id == "O") {
            // console.log("O is The Winner");

            // Adding Winner text
            winnername.innerText = `Player O Wins The Game!`;

            // show "Winner Page" & Hide "Mai Page"
            mainpage.style.display = "none";
            winner.style.display = "block";
        } else {
            continue;
        }
    }
}

// Match Draw Function
let drawFunc = () => {
    if (boxes[0].id != "" && boxes[1].id != "" &&
        boxes[2].id != "" && boxes[3].id != "" &&
        boxes[4].id != "" && boxes[5].id != "" &&
        boxes[6].id != "" && boxes[7].id != "" && boxes[8].id != "") {
        // Adding "Draw" text
        winnername.innerText = `Draw Match!`;

        // show "Winner Page" & Hide "Mai Page"
        mainpage.style.display = "none";
        winner.style.display = "block";
    }
}

// Reset Game
quit.addEventListener("click", () => {
    window.location.reload();
})

