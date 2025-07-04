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



//initialilisation d'une fonction avec paramètre catégorie
// function filtrer(category){ 
// //tu selectionnes tous les éléments article dans la section article (ou li si ça aurait été une liste) products.
//   let produits = document.querySelectorAll("#products article"); 
// //je parcours chaque produit dans la liste produits
//   produits.forEach(produit => {
// //si categroy est strictement = à all ou si un produit possède ou contient la class de la catégory sélenctioné (de ma fonction créé filtrage de mes category)
//     if(category === "all" || produit.classList.contains(category)){
// //on affiche le produit (on enlève la classe hide)
//       produit.classList.remove("hide");
//     }else{
// // on enlève le produit (on ajoute la classe hide)
//       produit.classList.add("hide");
//     }
//   });
// }

// document.getElementById('mon-bouton').onclick = function(event) {
//   console.log(event);
// };

//Changer la couleur du parent au clic en jaune
// let boutons = document.getElementsByTagName("button");
// for (let i = 0; i< boutons.length; i++){
//   boutons[i].onclick = function (event){
//     event.target.parentNode.style.backgroundColor ="yellow";
//   }
// }

//color au click et enlève la couleur au click
// let boutons = document.getElementsByTagName("button");
// for (let i = 0; i< boutons.length; i++){
//   boutons[i].onclick = function (event){
//     let parent = event.target.parentNode ;
//     if (parent.style.backgroundColor === "yellow"){
//       parent.style.backgroundColor ="";
//     }else{
//       parent.style.backgroundColor ="yellow";
//     }
//   }
// }

//Changer la couleur du parent et grand parent au click et les remettre comme avant au click
// let boutons = document.getElementsByTagName("button");
// for (let i = 0; i< boutons.length; i++){
//   boutons[i].onclick = function (event){ 
//     let parentDiv = event.target.parentNode ;
//     let grandParentDiv = parentDiv.parentNode ; //le parent du parent
//   if (parentDiv.style.backgroundColor === "yellow" && grandParentDiv.style.backgroundColor === "blue"){
//     parentDiv.style.backgroundColor = "";
//     grandParentDiv.style.background = "";
//   }else{
//     parentDiv.style.backgroundColor ="yellow" //je rappelle ma variable parentDiv créé plus haut
//     grandParentDiv.style.backgroundColor ="blue" //je rappelle ma variable grandParentDiv créé plus haut
//   }
//   }
// };

//***************************Exo 11.2 *******************************//
// Ajouter puis supprimer un élément html depuis JS (nous n'allons certainement pas l'uliser mais il faut savoir le faire)
// 1. créer l'élément
// var bouton = document.createElement('button');
// // 2. créer le contenu du bouton (noeud textuel)
// var texteDuBouton = document.createTextNode('Mon beau bouton créé via JS');
// // 3. ajouter le contenu au bouton
// bouton.appendChild(texteDuBouton);
// // 4. ajouter le bouton au body de la page
// document.body.appendChild(bouton);
// // 5. supprimer ce qu'on vient de créer 
// bouton.parentNode.removeChild(bouton);


// création de mes variables input et button
var saisieChamp = document.createElement('input');
var bouton = document.createElement('button');
// Ajout du contenu (du texte) à l'intérieur du bouton (j'ai utilisé ma variable bouton)
bouton.appendChild(document.createTextNode('clique ici pour effacer ta saisie dans le champ'));
//Ajout de la saisie du champ et le bouton dans la section id exo 11-2 que j'ai créé dans mon html
document.getElementById("exo11-2").appendChild(saisieChamp);
document.getElementById("exo11-2").appendChild(bouton);
// Création d'une fonction pour que lorsque l'on clique dans la saisie du champ la valeur soit vide
onclick = function (){
  saisieChamp.value ='';
};



