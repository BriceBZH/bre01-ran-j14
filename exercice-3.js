window.addEventListener("DOMContentLoaded", function(){
    //création du lien
	let lien = document.createElement("a");
	let libLien = document.createTextNode("ici");
	lien.appendChild(libLien); // on insère le texte dans le li
	//lien.href = "https://google.com";
	lien.setAttribute("href", "https://google.com");
    var sec = document.querySelector("p");
    sec.appendChild(lien);
});