window.addEventListener("DOMContentLoaded", function(){
	let ul = document.getElementById("todo-list");
	let form = document.getElementsByTagName("form");
	for (let i = 0; i < form.length; i++) {
        form[i].addEventListener("submit", function(event){
        	let tache = document.getElementById("newTask");
        	let newLi = document.createElement("li");
        	let newText = document.createTextNode(tache.value);
        	newLi.appendChild(newText); // on insère le texte dans le li
        	ul.appendChild(newLi);
        	event.preventDefault();
        });
	}
});