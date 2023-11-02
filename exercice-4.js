window.addEventListener("DOMContentLoaded", function(){
	let pokemons = ["Pikachu", "Salameche", "Bulbizarre", "Carapuce"];
	let sec = document.querySelector("body");
	let newUl = document.createElement("ul");
	for(let i=0;i<pokemons.length;i++) {
	    let newLi = document.createElement("li");
	    let newText = document.createTextNode(pokemons[i]);
	    newLi.appendChild(newText); // on insère le texte dans le li
	    newUl.appendChild(newLi);
	}
	sec.appendChild(newUl);
});