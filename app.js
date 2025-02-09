let boxes = document.querySelectorAll(".box");
let ResetBtn = document.querySelector(".Reset");
let newgameBtn=document.querySelector(".newgame");
let msgBox=document.querySelector(".msg-box");
let Msg=document.querySelector(".msg");

let turnO = true;//playerX,playerO

//2D Array
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box Was Clicked");
        if (turnO) {
            box.innerText = "0";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner()
    });
});
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(Winner) => {
Msg.innerText=`Congradulations,Winner is ${Winner}`;
msgBox.classList.remove("hide");
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner..",pos1Val)
                disableBoxes();
                showWinner(pos1Val);

            }
}

    };
};


const Resetgame=()=>{
    turnO=true;
    enableBoxes();
    msgBox.classList.add("hide");
}
newgameBtn.addEventListener("click",Resetgame );
ResetBtn.addEventListener("click",Resetgame);