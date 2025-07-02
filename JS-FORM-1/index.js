// /****************************Menu Burger**********************************/
// let menuBurger = document.querySelector (".menuBurger"),
// basculant = document.querySelector (".basculant")

// basculant.addEventListener("click", function(event) {
//   menuBurger.classList.toggle("active")
// });
   
   
//    // Affiche la pop-up automatiquement 
// window.onload = function() {
//   document.getElementById('popup').classList.add('active');  // La classe active est celle qu'on a créé dans le fichier css
// };

// // Ferme la pop-up au clic sur la croix
// document.getElementById('closeBtn').onclick = function() {
//   document.getElementById('popup').classList.remove('active');
// };


 
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

// var couleurFond = document.getElementById('premier');
// couleurFond.style.backgroundColor = 'yellow';
// var couleurFond2 = document.getElementById('second')
// document.getElementById("second").onclick = function(){
//    couleurFond2.style.backgroundColor = "yellow";
// }


// document.getElementById("mon-bouton2"). onclick = function(){
//     var couleurFond2 = document.getElementById("second");
//     couleurFond2.style.backgroundColor = "yellow";
//     }

// var yellowClick = document.getElementsByTagName("p")
// for (var i = 0; i < yellowClick.length; i++){
//     yellowClick[i].onclick = function(event){
//         event.target.style.backgroundColor ="yellow";   
//     }   
// }

// function colorierParagraphes() {
//     let paragraphs = document.getElementsByTagName("p")
//     for (let i = 0; i < paragraphs.length; i++){
//         paragraphs[i].style.backgroundColor ="yellow";
//     }
// }
// colorierParagraphes();


// Exercice 10.4 - Filtrage par catégorie

// function chooseCategorie(cloth, displayStyle) {
//   var category = document.getElementsByClassName(cloth);
//   for (var i = 0; i < category.length; i++) {
//     category[i].style.display = displayStyle;
//   }
// }
// document.getElementById('all').onclick = function() {
//  chooseCategorie ('cloth', 'block');
// };
// document.getElementById('women').onclick = function() {
//   chooseCategorie ('cloth', 'none'); // Cache tous les éléments ayant la classe 'cloth' en les rendant non visibles (display:none)
//   chooseCategorie('women', 'block'); // Affiche tous les éléments ayant la classe 'women' en les rendant visibles (display:block)
// };
// document.getElementById('men').onclick = function() {
//   chooseCategorie ('cloth', 'none'); 
//   chooseCategorie ('men', 'block'); 
// };
// document.getElementById('children').onclick = function() {
//   chooseCategorie ('cloth', 'none'); 
//   chooseCategorie ('children', 'block');
// };


function filtrer(category){
  let produits = document.querySelectorAll("#products li");
  produits.forEach(produit => {
    if(category === "all" || produit.classList.contains(category)){
      produit.classList.remove("hide");
    }else{
      produit.classList.add("hide");
    }
  });
}
