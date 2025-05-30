console.log("This is my practice");

let boxes = document.querySelectorAll('.box');

let reset = document.querySelector('.reset');
let newGame = document.querySelector('.new_game')
let msgContainer = document.querySelector('.msg_container')
let para = document.querySelector('.para')

let turnO = true;
let count = 0;
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8], 
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    ]

    const resetGame = ()=>{
        enabledBoxes();
        turnO = true;
        count = 0
        msgContainer.classList.add('hide')
        
    }

    const disabledBoxes = ()=>{
        for(let box of boxes){
            box.disabled = true;
        }
    }

    const enabledBoxes = ()=>{
        for(let box of boxes){
            box.disabled = false;
            box.innerText = "";

        }
    }
    let showWinner = (winner)=>{
        para.innerText =`Congratulation winner is ${winner}`;
        msgContainer.classList.remove('hide');
        disabledBoxes();

    }


boxes.forEach((box)=>{
  box.addEventListener("click" , ()=>{
    if(turnO){
    box.innerText = "O";
    turnO = false;
    }
    else{
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;
    count++;
    checkWinner();
  })
})


let checkWinner = ()=>{
    let winnFound = false;
    for(let pattern of winPattern){
      let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val!= "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
                winnFound = true;
            }
         
        }

    }
    if(!winnFound && count === 9){
        para.innerText = "It's a Draw";
        msgContainer.classList.remove("hide");
        disabledBoxes();
    }
}
newGame
reset.addEventListener("click" , resetGame)
newGame.addEventListener("click" , resetGame)