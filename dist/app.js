"use strict";
const player_1 = "X";
const player_2 = "O";
const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let count = 0;
let winner;
let turn = player_1;
const container = document.getElementById("cont");
console.log(container);
container.addEventListener("click", (e) => {
    let cell = e.target;
    if (cell.innerHTML === "") {
        let innerhtml = `<span class="heading">${turn}</span>`;
        cell.innerHTML = innerhtml;
        count++;
        wins.forEach((win => {
            let cell1 = document.getElementById(`${win[0]}`);
            let cell2 = document.getElementById(`${win[1]}`);
            let cell3 = document.getElementById(`${win[2]}`);
            if ((cell1.textContent === cell2.textContent && cell2.textContent === cell3.textContent)
                && (cell1.textContent != "")) {
                console.log("Win");
                cell1.style.backgroundColor = "green";
                cell2.style.backgroundColor = "green";
                cell3.style.backgroundColor = "green";
                let alert = document.getElementById("win");
                alert.style.display = "block";
                alert.textContent = `${turn} has won the game... Congratulations!!!`;
            }
        }));
        swapPalyer();
        if (count == 9) {
            let alert = document.getElementById("win");
            alert.style.display = "block";
            alert.textContent = `Tie... Play Again`;
        }
    }
});
function swapPalyer() {
    if (turn == player_1) {
        turn = player_2;
    }
    else {
        turn = player_1;
    }
}
