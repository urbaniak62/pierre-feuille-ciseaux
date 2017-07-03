


var scoreO=0;
var scoreU=0;
var tour;

while(scoreO!=3 && scoreU!=3){

  var user=prompt("pierre feuille ou ciseaux");
  var ordi= Math.random();

if (ordi<=0.34){
  ordi=("pierre")
}
  if (ordi<=0.67){
    ordi=("feuille");
    }
      else{
      ordi=("ciseaux");
    }
      alert("l'ordi à choisi : " + ordi);

  if (user===ordi) {
    alert("egalité");
      }

    if((user==="pierre" && ordi==="ciseaux")
      || (user==="ciseaux" && ordi==="feuille")
      || (user==="feuille" && ordi==="pierre")){
        alert("joueur gagne ");

        alert("ton score est de :" + scoreU++);

          }
        else {
          alert("ordi gagne");

        }
        alert("le score de l' ordi est : " + scoreO++);
}

alert ("ordinateur" + scoreO +""+""+"vous" +scoreU +"");
