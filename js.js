


var scoreO=0;
var scoreU=0;


while(scoreO!=3 && scoreU!=3){

  var user=prompt("pierre feuille ou ciseaux");
  var ordi= Math.random();

if (ordi<=0.34){
  ordi=("pierre")
}
else  if (ordi<=0.67 && ordi>0.34){
    ordi=("feuille");
    }
      else{
      ordi=("ciseaux");
    }
      alert("l'ordi à choisi : " + ordi);

  if (user===ordi) {
    alert("egalité");
      }

  else  if((user==="pierre" && ordi==="ciseaux")
      || (user==="ciseaux" && ordi==="feuille")
      || (user==="feuille" && ordi==="pierre")){
        scoreU++ ;
        alert("joueur gagne, ton score est : " + scoreU + " et le score de l'ordinateur est : " + scoreO );
      }
        else {
          scoreO++;
          alert("ordi gagne, son score est : " + scoreO + " et le score du joueur est : " + scoreU);
        }

}

 alert ("ordinateur" + scoreO +""+"vous" +scoreU +"");
