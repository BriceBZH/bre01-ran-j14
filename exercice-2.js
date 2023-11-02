window.addEventListener("DOMContentLoaded", function(){
    //ajout du second titre
	let titre = document.createElement("h2");
	let newTitre = document.createTextNode("Le titre de la deuxième section");
	titre.appendChild(newTitre); // on insère le texte dans le li
    var sec = document.querySelector("body > section:last-of-type");
    sec.appendChild(titre);
    //ajout second paragraphe
    let para = document.createElement("p");
	let newPara = document.createTextNode("Le paragraphe de la deuxième section");
	para.appendChild(newPara); // on insère le texte dans le li
    var sec2 = document.querySelector("body > section:last-of-type");
    sec2.appendChild(para);
});