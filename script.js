let boxes = document.querySelectorAll(".box");
let winner = document.querySelector(".win");
let newgame = document.querySelector(".newgame");

let winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


let turnO = true; // player o player x



boxes.forEach((box) => {

    box.addEventListener("click", () => {
        console.log("Box was clicked");

        if (turnO === true) {   // player O turn
            box.innerHTML = "O";
            turnO = false;

        }

        else {  //Player X turn
            box.innerHTML = "X"
            turnO = true;

        }

        box.disabled = true;


        checkWinner();
    })

})



checkWinner = () => {

    for (pattern of winningPatterns) {
        let posVal1 = boxes[pattern[0]].innerText;  //for zeroth position of index 
        let posVal2 = boxes[pattern[1]].innerText;  // for first position off array index
        let posVal3 = boxes[pattern[2]].innerText;  // for third position  of ARRAY index

        if (posVal1 != "" && posVal2 != "" && posVal3 != "") {   // box should not be empty
            if (posVal1 === posVal2 && posVal2 === posVal3) // boxes have equal value
            {
                console.log(winner.innerHTML = " Congratulations, Winner is " + posVal1);
            }
        }

    }
}


function reset() {
    for (let box of boxes) {
        box.innerText = "";

        winner.innerHTML = "";
    }

}

reset();

function Newgame() {
    for (box of boxes) {
        box.disabled = false;
    }
}

Newgame();