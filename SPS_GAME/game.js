
let play=confirm("Shall we play Rock,Paper or Scissor!!");
const arr=['paper','scissor','stone'];
if(!play)
{
  alert("OK..MAY BE NEXT TIME"); 
}
else{
       choose();
       let another=confirm("ANOTHER TIME ? ")

    if(another)
    {
     //    location.reload();
          choose();
    }
    else{
        alert("OK! MAY BE NEXT TIME");
    }
    }

function choose(){
    let player=prompt("Choose any one - scissor  or stone or paper");
    player=player.trim();
    player=player.toLowerCase();
    if(player=='')
    { 
         console.log(alert("ENTER CORRECTLY"));
         choose();
    }
    else if(!arr.includes(player)){
        console.log(alert("ENTER CORRECTLY"));
        choose();
    }
    else {
         
    
    let pc=Math.floor(Math.random()*3);
    
    pc=arr[pc];
    if(player===pc)
    {
        alert(`You select-${player} and I select-${pc} So, TIE!!`);
    }
    else
    {
        var ans=player==="paper"&&pc==="scissor"?`You select-${player} and I select-${pc} So,I WON!!`:player==="paper"&&pc==="stone"?
        `You select-${player} and I select-${pc} So,You WON!!`:player==="scissor"&&pc==="stone"?`You select-${player} and I select-${pc} So,I WON!!`:
        player==="scissor"&&pc==="paper"?`You select-${player} and I select-${pc} So,You WON!!`
        :player==="stone"&&pc==="scissor"?`You select-${player} and I   select-${pc} So,You WON!!`:`You select-${player} and I select-${pc} So,I WON!!`;
        alert(ans);
    }
}
}
  

   

