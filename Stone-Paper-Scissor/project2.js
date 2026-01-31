let userScore = 0; 
let compScore =0;

const choices = document.querySelectorAll(".choice"); 
const msg = document.querySelector("#msg");
const userscorepara =document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};
    const drawGame = () =>{
        console.log("Game was Draw");
        msg.innerText = "Game was Draw. Play again.";
        msg.style.backgroundColor = "#081b31";
    };
    const showWinner = (userWin , userChoice,compchoice) =>{
        if(userWin){
            userScore++;
            userscorepara.innerText = userScore;
            msg.innerText = `You Win! Your ${userChoice} beats ${compchoice}`;
            msg.style.backgroundColor = "green";
        }else{
            compScore++;
            compscorepara.innerText =compScore;
            msg.innerText = `You lose. ${compchoice} beats Your ${userChoice}`;
            msg.style.backgroundColor = "red";
        }
    };

    

const playGame = (userChoice) =>{
    console.log("user choice ", userChoice);
    const compchoice = genCompChoice();
    console.log("comp choice ", compchoice);

    if (userChoice ==compchoice){
        drawGame();
    } 
    else{
        let userWin = true;
        if(userChoice=== "rock"){
            userWin = compchoice === "paper"? false:true;
        }
        else if(userChoice === "paper") {
            userWin=compchoice === "scissors" ? false:true;

        }
        else{
            userWin=compchoice === "rock" ? false:true;
        }
        showWinner(userWin , userChoice, compchoice);

    }

};

choices.forEach((choice) =>{

    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);

    });
});