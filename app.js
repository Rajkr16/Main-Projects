let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const p=document.querySelector("#msg");
const userScorePara=document.querySelector("#user");
const compScorePara=document.querySelector("#comp");

const compGenChoice= ()=>{
    let options=["Rock" , "paper", "Scissors"];
    let random=Math.floor(Math.random()*3);
    return options[random];
}

const drawGame=()=>{
    console.log("Game Draw");
    p.innerText="Game is draw, Play Again";
    p.style.backgroundColor= "#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win");
        p.innerText=`you win! your ${userChoice} beats ${compChoice}`;
        p.style.backgroundColor="Green";

    }
    else {
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose");
        p.innerText=`you lose, ${compChoice} beats you ${userChoice}`;
        p.style.backgroundColor="Red";
    }
}
const playGame=(userChoice)=>{
    console.log("user choice - " , userChoice);
    let compChoice=compGenChoice();
    console.log("computer choice - ",compChoice);

    if(userChoice===compChoice){
      drawGame();
    }
    else {
        let userWin=true;
        if(userChoice==="Rock"){
            // comp.choice ---> paper,scissor
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            // comp.choice ---> rock,scissor
            userWin=compChoice==="Scissor"?false:true;
        }
        else {
            //comp.choice ---> rock,paper
            userWin=compChoice==="Rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
   

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("button was clicked", userChoice);
        playGame(userChoice);

    });
});

