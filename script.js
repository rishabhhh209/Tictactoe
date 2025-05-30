let boxes = document.querySelectorAll(".box");

let reset = document.querySelector('.reset');
let msgContainer = document.querySelector('.msg_container')
let newGame = document.querySelector('.new_game');
let para = document.querySelector('.para');

let turnO = true;
let count = 0

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
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide")
   
}

boxes.forEach((box)=>{
  box.addEventListener("click" ,()=>{
     console.log("Button was clicked");
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

const disabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }

}
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
         box.innerText = ""
    }

}

const showWinner = (Winner)=>{
  para.innerText = `congrautulations winner is ${Winner}`;
  msgContainer.classList.remove('hide');
  disabledBoxes()
}
const checkWinner = ()=>{
    for(let pattern of winPattern){
         let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "" ){
            if(pos1val===pos2val && pos2val === pos3val){
                console.log("Winner");
                showWinner(pos1val);
            }
            else if(count === 9) {
                para.innerText = "It's a draw!";
                msgContainer.classList.remove("hide");
                disabledBoxes();
              }
           
            
        }
    
    }
    
    
   
}

newGame.addEventListener("click" , resetGame);
reset.addEventListener("click" , resetGame);
