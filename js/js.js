var scoreO=0;
var scoreU=0;

while(scoreO!=3 && scoreU!=3){

  var user=prompt("comment t'appel tu..?");
  var ordi= Math.random();

if (ordi<=0.34){
  ordi=("pierre")
  document.getElementById("pierreO").src="img/pierre.png";
}
else  if (ordi<=0.67 && ordi>0.34){
    ordi=("feuille");
    document.getElementById("feuilleO").src="img/feuille.png";
    }
      else{
      ordi=("ciseaux")
      document.getElementById("ciseauxO").src="img/ciseaux.png";
    }

  if (user===ordi) {
    alert=("egalité..!!.");
      }

  else  if((user==="pierre" && ordi==="ciseaux")
      || (user==="ciseaux" && ordi==="feuille")
      || (user==="feuille" && ordi==="pierre")){
        scoreU++ ;

      }
        else {
          scoreO++;

        }
        document.getElementById("user").innerHTML=("nom : ") + user;
        document.getElementById("scoreU").innerHTML=("score = ") + scoreU;
        document.getElementById("scoreO").innerHTML=("score = ") + score0;
      }
