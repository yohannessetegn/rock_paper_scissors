function computerPlay(){
    let pointer =  Math.floor((Math.random())*3);

    if(pointer === 0) 
        {return('Rock');}
    else if(pointer === 1) 
        {return('Paper');}
    else
        {return('Scissors');}
}

let x = prompt("choose Rock, Paper, Scissors", "");


let playerScore=0, computerScore=0;
let computerSelection = computerPlay();


function round(playerSelection, computerSelection){
    if(playerSelection === computerSelection)
    {
        console.log("Draw! " + playerSelection + " can't beat " + computerSelection);
        console.log("computer "+ computerScore + ":" + playerScore + " player")

    }
    else if((playerSelection === "Paper" && computerSelection === "Rock")||
    (playerSelection === "Rock" && computerSelection === "Scissors")||
    (playerSelection === "Scissors" && computerSelection === "Paper"))
    {
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
        ++playerScore;
        console.log("computer "+ computerScore + ":" + playerScore + " player")
   
    }
    else{
        console.log("You Lost! " + computerSelection  + " beats " + playerSelection);
        ++computerScore;
        console.log("computer "+ computerScore + ":" + playerScore + " player")
        
    }
}

round(x, computerSelection);

let leader;
if(playerScore >= computerScore){
    leader = playerScore;
}
else{
    leader = computerScore;
}

for(leader; leader < 5; leader++)
{
    let y = prompt("choose Rock, Paper, Scissors", "");
    
    
}
