
// Exercice 9.a
// let nom2 = document.getElementById('nom').value; // Permet de récupérer la valeur qui est dans le fichier html
// let prenom2 = document.getElementById('prenom').value;
// alert(nom2 + " " + prenom2);
// document.getElementById('nom').onclick = function direBonjour() {
//   alert('Joli nom !');
// }

//Exercice 9.b - Calculatrice
// document.getElementById('mon-bouton').onclick = function resultat(){
//     var premierNombre = parseFloat (document.getElementById('premier-nombre').value);
//     var deuxiemeNombre = parseFloat (document.getElementById('deuxieme-nombre').value);
//     document.getElementById('resultat').value = premierNombre + deuxiemeNombre;
// }

// Exercice 10.1 - Afficher / Cacher
// var element = document.getElementById("second");
// element.classList.remove("hidden"); //C'est pour retirer la class css qui se nome hidden (donc tout ce qu'on a associé sur notre fichier css)


// Exercie 10.2 - Cacher les spoilers
// document.getElementById("mon-bouton").onclick = function cashSpoiler() {
//     var cacher = document.getElementsByClassName("spoiler");
//     for (var i = 0; i < cacher.length; i++){
//         cacher[i].classList.add("hidden");
//     }
// }

// Exercice 10.3 - Surbrillance au click

var couleurFond = document.getElementById('premier');
couleurFond.style.backgroundColor = 'yellow';
document.getElementById("mon-bouton2"). onclick = function couleurFond2(){
    var couleurFond = document.getElementById("second");
    couleurFond.style.backgroundColor ="yellow";
}






