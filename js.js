var user=prompt("pierre feuille ou ciseaux");
var ordi= Math.random();
var score=("score");
var tour=parseInt(" ");

function comparaison(user,ordi){
  if (user==ordi) {
    prompt("egalité");
  }if(user==pierre && ordi==ciseau){
    prompt("joueur gagne");
    }
    else {
      prompt("ordi gagne");
    }
    if(user==feuille && ordi==ciseau){
      prompt("ordi gagne");
    }
    else{
      prompt("joueur gagne");
    }
    if(user==ciseaux && ordi==pierre){
      prompt("ordi gagne");
    }
    else{
      prompt("joueur gagne");
    }
  }
  console.log(comparaison);
