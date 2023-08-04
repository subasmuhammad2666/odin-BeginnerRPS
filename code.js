function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function game(){
    let finalResult=null;
    let arr=[];
    for(let i=0;i<5;i++){
        let playerChoice=(prompt("Choose Rock, Paper or Scissor"));
        playerChoice=playerChoice.toLowerCase();
        let computerChoice=getComputerChoice();
        finalResult=singleRound(playerChoice,computerChoice);
        console.log(finalResult)
    }
}
function singleRound(playerChoice,computerChoice){
    let result=null;
    if((playerChoice=='rock' && computerChoice=='Rock')||(playerChoice=='scissor' && computerChoice=='Scissors')||(playerChoice=='paper'&&computerChoice=='Paper')){
        result="Its a Tie!";
        return result;
    }
    else if(playerChoice=='rock' && computerChoice=='Paper'){
        result="You Lost! Paper beats Rock.";
        return result;
    }
    else if(playerChoice=='paper' && computerChoice=='Rock'){
        result="You Win! Paper beats Rock.";
        return result;
    }
    else if(playerChoice=='rock' && computerChoice=='ScissorS'){
        result="You Win! Rock beats Scissor."
        return result;
    }
    else if(playerChoice=='scissor' && computerChoice=='Rock'){
        result="You Lost! Rock beats Scissor."
        return result;
    }
    else if(playerChoice=='paper' && computerChoice=='Scissors'){
        result="You Lost! Scissor beats Paper."
        return result;
    }
    else if(playerChoice=='scissor' && computerChoice=='Paper'){
        result="You Win! Scissor beats Paper."
        return result;
    }
}
console.log(game())

