window.addEventListener("DOMContentLoaded", function(){
	let newLi = document.createElement("li");
	let newLiText = document.createTextNode("Sucre");
	newLi.appendChild(newLiText); // on insère le texte dans le li
    let ul = document.getElementById("ingredients"); // je sélectionne mon ul
    ul.appendChild(newLi);
});