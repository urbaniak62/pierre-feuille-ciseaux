for (tour=1; tour<=6; tour++){

var user=prompt("pierre feuille ou ciseaux");
var ordi= Math.random();
var scoreO;
var scoreU;
var tour;


if (ordi<=0.33){
  ordi=("pierre")
}if (ordi>0.34 && ordi>0.66){
    ordi=("feuille");
    }
    else{
      ordi=("ciseaux");
    }
      alert(ordi);

  if (user===ordi) {
    alert("egalité");
      }if((user==="pierre" && ordi==="ciseaux")
      || (user==="ciseaux" && ordi==="feuille")
      || (user==="feuille" && ordi==="pierre")){
        alert("joueur gagne ");
        if(scoreU=0; scoreU<=3; scoreU++){
        prompt("ton score est de :" + scoreU + );}
        }
        else {
          console.log(ordi);
          alert("ordi gagne");
          parseInt(prompt("le score de l' ordi est : " + scoreO+=1));
        }
        alert(tour);

}
