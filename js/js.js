var scoreO=0;
var scoreU=0;
var user;
var nom=prompt("comment t'appel tu..?");
document.getElementById("user").innerHTML=("nom : ") + nom;


  function comparer(userChoice) {
    user=userChoice;
    console.log(user);
/*----------------choix ordi-------------*/
  var ordi= Math.random();


  if (ordi<=0.34){
  ordi="pierre";
  document.getElementById("adv").src="img/pierre.jpg";
}
  else  if (ordi<=0.67 && ordi>0.34){
    ordi="feuille";
    document.getElementById("adv").src="img/feuille.gif";
    }
    else{
      ordi="ciseaux";
      document.getElementById("adv").src="img/ciseau.gif";
    }

    /*---------------choix user --------------------------*/
  if (user==ordi) {
    alert=("egalité..!!.");
      }

   else  if((user==="pierre" && ordi==="ciseaux")
      || (user==="ciseaux" && ordi==="feuille")
      || (user==="feuille" && ordi==="pierre")){
        scoreU++ ;
        document.getElementById("scoreU").innerHTML=("score = ") + scoreU;
        console.log(scoreU);
      }


        else {
          scoreO++;
          document.getElementById("scoreO").innerHTML=("score = ") + scoreO;
        }
        if (scoreU==3) {
          document.getElementById("adv").src="img/win.gif";
          scoreO=0;
          scoreU=0;
        }
        else if (scoreO==3) {
          document.getElementById('adv').src="img/loose.gif";
            scoreO=0;
            scoreU=0;

        }

      }
