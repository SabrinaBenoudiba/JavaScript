
// let nom2 = document.getElementById('nom').value; // Permet de récupérer la valeur qui est dans le fichier html
// let prenom2 = document.getElementById('prenom').value;
// alert(nom2 + " " + prenom2);
// document.getElementById('nom').onclick = function direBonjour() {
//   alert('Joli nom !');
// }

document.getElementById('mon-bouton').onclick = function resultat(){
    var premierNombre = parseFloat (document.getElementById('premier-nombre').value);
    var deuxiemeNombre = parseFloat (document.getElementById('deuxieme-nombre').value);
    document.getElementById('resultat').value = premierNombre + deuxiemeNombre;
}
