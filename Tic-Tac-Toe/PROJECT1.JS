let boxes = document.querySelectorAll(".box");
let Resetbtn = document.querySelector("#Reset-btn"); 
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turnO = true;

const winPatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const resetGame = () =>{
    turnO = true;
    EnabledBoxes();
    msgContainer.classList.add("hide");
    
 };
 
 boxes.forEach((box) => {
    box.addEventListener("click", () => {
       
        if (turnO){
            box.innerText = "O";
            turnO = false;
        } else{
            box.innerText = "X";
            turnO = true;

                 
        }
        box.disabled = true;
        checkWinner();

        
    });

   
    
 });
     const disabledBoxes = () =>{
        for(let box of boxes){
            box.disabled = true;
        }
     };

      const EnabledBoxes = () =>{
        for(let box of boxes){
            box.disabled = false;
            box.innerText ="";
        }
     };
     

  const showWinner = (Winner) => {
        msg.innerText = `Congratulation, Winner is ${Winner}`;
        msgContainer.classList.remove("hide");
        disabledBoxes();
    };

 const checkWinner = () => {
    for (pattern of winPatterns){
        let pos1Val1 = boxes[pattern[0]].innerText;
        let pos1Val2 = boxes[pattern[1]].innerText;
        let pos1Val3 = boxes[pattern[2]].innerText;
        
        if(pos1Val1 != "" && pos1Val2 != "" && pos1Val3 != "") {
            if (pos1Val1 ==pos1Val2 && pos1Val2==pos1Val3)
                {
                    
                    showWinner(pos1Val1);
            }

        }

    }
 };

 newGamebtn.addEventListener("click",resetGame);
 Resetbtn.addEventListener("click",resetGame);

 