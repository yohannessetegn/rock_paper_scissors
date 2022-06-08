

function random(num){
    return (Math.floor(Math.random() * num));
}



let string = "";
let c1Score = 0, humanScore = 0, c2='rock';

function retrieve(){
    let tempoHolder = (prompt("rock,paper,scissor", ""));
    c2 = tempoHolder.toLowerCase();
    if(c2 === 'rock' || 'paper' || 'scissor')
    {
        return c2;
    }
    else{
        correctInput();
    }
}

function correctInput(){
    let tempo2Holder = (prompt("your input wasn't correct! please enter correctly", ""));
    c2 = tempo2Holder.toLowerCase();

    if(c2 === 'rock' || 'paper' || 'scissor')
    {
        return c2;
    }
    else{
        correctInput();
    }
}

function turnToString(num=0)
{
    if(num === 0)
    {
        return ("rock");
    }
    else if(num === 1)
    {
        return ("paper");
    }
    else
    {
        return("scissor");
    }
}


function round(com , hum){
    if((com == 'rock' && hum == 'scissor')||
    (com == 'scissor' && hum == 'paper')||
    (com == 'paper' && hum == 'rock'))
    {
        // prompt (com + " beats " + hum);
        console.log ("computer/" + com + " beats " + hum + "/human" );
        ++c1Score;
    }
    else if(com == hum)
    {
        // prompt (com + " can't beats " + hum);
        console.log ("computer/" + com + " can't beat " + hum + "/human" );
    }
    else
    {
        // prompt (hum + " beats " + com);
        console.log ("human/" + hum + " beats " + com + "/computer" );
        ++humanScore;
    }
}


function letTheGamesBiggin(){
    for(let i=0; i<5; i++)
    {
        retrieve();// assign c2(humanValue) to the typed option

        let c1;
        c1 = random(3);// draws random number from 0 to 2(including)
        turnToString(c1);// returns rock, paper , scissor from random number
        round(turnToString(c1), c2); // compares the results

        if (c1Score <= humanScore)
        {
            i = humanScore - 1;
        }

        else{i = c1Score;}
    }   
}

letTheGamesBiggin();

let winner;
if (humanScore > c1Score)
{
    winner = "human wins!";
}
else
{
    winner = "computer wins!";   
}

console.log("\n"+ winner + "\t" + "\t" + "computer " + c1Score + ":" + humanScore + " human");
  
