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
  document.getElementById("pierreO").src="img/pierre.jpg";
}
  else  if (ordi<=0.67 && ordi>0.34){
    ordi="feuille";
    document.getElementById("feuilleO").src="img/feuille.jpg";
    }
    else{
      ordi="ciseaux";
      document.getElementById("ciseauxO").src="img/ciseaux.jpg";
    }
    console.log(ordi);
    /*---------------choix user --------------------------*/
  if (user===ordi) {
    alert=("egalité..!!.");
      }

   else  if((user==="pierre" && ordi==="ciseaux")
      || (user==="ciseaux" && ordi==="feuille")
      || (user==="feuille" && ordi==="pierre")){
        scoreU++ ;
        document.getElementById("scoreU").innerHTML=("score = ") + scoreU;
      }

        else {
          scoreO++;
          document.getElementById("scoreO").innerHTML=("score = ") + scoreO;
        }
      }
