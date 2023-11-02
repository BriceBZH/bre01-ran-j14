window.addEventListener("DOMContentLoaded", function(){
	let pokemons = ["Pikachu", "Salameche", "Bulbizarre", "Carapuce"];
	let newUl = document.createElement("ul");
	for(var i=0;i<pokemons.length;i++) {
	    let newLi = document.createElement("li");
	    let ul = document.createElement("ul");
	    let newText = document.createTextNode(pokemons[i]);
	    newLi.appendChild(newText); // on insère le texte dans le li
	    ul.appendChild(newLi);
	    var sec = document.querySelector("body");
         sec.appendChild(ul);
	}
});