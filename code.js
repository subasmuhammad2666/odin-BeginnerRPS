let rockBtn=document.getElementById('rock');
let paperBtn=document.getElementById('paper');
let scisssorBtn=document.getElementById('scissor');
let finalResult='';
let displayResult=document.createElement('div');
let displayScore=document.createElement('div');
let displayWinner=document.createElement('div');
displayScore.classList.add('score');
displayResult.classList.add('disp');
displayWinner.classList.add('winner');
document.body.appendChild(displayResult);
document.body.appendChild(displayScore);
document.body.appendChild(displayWinner);
let computerScore=0;
let playerScore=0;

rockBtn.addEventListener('click',()=>{
    const computerChoice = getComputerChoice();
    finalResult=singleRound('rock',computerChoice);
    console.log(computerChoice)
    displayResult.textContent=finalResult[0];
    displayScore.textContent = "Player Score: " + finalResult[1] + " | Computer Score: " + finalResult[2];
    if(finalResult[1]===5 && finalResult[1]>finalResult[2])
    {
        displayWinner.textContent="Congrats! You are the winner.";
    }
    else if(finalResult[2]===5 && finalResult[2]>finalResult[1])
    {
        displayWinner.textContent="Good Luck Next Time, Computer is the Winner";
    }
});
paperBtn.addEventListener('click',()=>{
    const computerChoice = getComputerChoice();
    finalResult=singleRound('paper',computerChoice);
    console.log(computerChoice)
    displayResult.textContent=finalResult[0];
    displayScore.textContent = "Player Score: " + finalResult[1] + " | Computer Score: " + finalResult[2];
    if(finalResult[1]===5 && finalResult[1]>finalResult[2])
    {
        displayWinner.textContent="Congrats! You are the winner.";
    }
    else if(finalResult[2]===5 && finalResult[2]>finalResult[1])
    {
        displayWinner.textContent="Good Luck Next Time, Computer is the Winner";
    }
});
scisssorBtn.addEventListener('click',()=>{
    const computerChoice = getComputerChoice();
    finalResult=singleRound('scissor',computerChoice);
    displayResult.textContent=finalResult[0];
    displayScore.textContent = "Player Score: " + finalResult[1] + " | Computer Score: " + finalResult[2];
    if(finalResult[1]===5 && finalResult[1]>finalResult[2])
    {
        displayWinner.textContent="Congrats! You are the winner.";
    }
    else if(finalResult[2]===5 && finalResult[2]>finalResult[1])
    {
        displayWinner.textContent="Good Luck Next Time, Computer is the Winner";
    }
});

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function singleRound(playerChoice,computerChoice){
    let result=null;
    if((playerChoice=='rock' && computerChoice=='Rock')||(playerChoice=='scissor' && computerChoice=='Scissors')||(playerChoice=='paper'&&computerChoice=='Paper')){
        result="Its a Tie!";
        playerScore=playerScore;
        computerScore=computerScore;
        return [result,playerScore,computerScore];
    }
    else if(playerChoice=='rock' && computerChoice=='Paper'){
        result="You Lost! Paper beats Rock.";
        playerScore=playerScore;
        computerScore=computerScore+1;
        return [result,playerScore,computerScore];
    }
    else if(playerChoice=='paper' && computerChoice=='Rock'){
        result="You Win! Paper beats Rock.";
        playerScore=playerScore+1;
        computerScore=computerScore;
        return [result,playerScore,computerScore];
    }
    else if(playerChoice=='rock' && computerChoice=='Scissors'){
        result="You Win! Rock beats Scissor."
        playerScore=playerScore+1;
        computerScore=computerScore;
        return [result,playerScore,computerScore];
    }
    else if(playerChoice=='scissor' && computerChoice=='Rock'){
        result="You Lost! Rock beats Scissor."
        computerScore=computerScore+1;
        playerScore=playerScore;
        return [result,playerScore,computerScore];
    }
    else if(playerChoice=='paper' && computerChoice=='Scissors'){
        result="You Lost! Scissor beats Paper."
        computerScore=computerScore+1;
        playerScore=playerScore;
        return [result,playerScore,computerScore];
    }
    else if(playerChoice=='scissor' && computerChoice=='Paper'){
        result="You Win! Scissor beats Paper."
        playerScore=playerScore+1;
        computerScore=computerScore;
        return [result,playerScore,computerScore];
    }
}

