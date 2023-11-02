window.addEventListener("DOMContentLoaded", function(){
	// votre code ici
	let users = [
		["Mari", "Doucet"],
		["Hugues", "Froger"],
		["Alex", "Terieur"],
		["Anne", "O'Neam"]
	];
    let new_table = document.createElement("table");
    for(var i=0;i<users.length;i++) { //on parcours les cases générales du tableau
        let new_ligne = document.createElement("tr");
        for(var j=0;j<users[i].length;j++) { //on parcours les cases des cases
            let new_colonne = document.createElement("td"); //création d'une colonne par champs
            let newText = document.createTextNode(users[i][j]);
            new_colonne.appendChild(newText); // on insère le texte dans le td
            new_ligne.appendChild(new_colonne);
        }
        new_table.appendChild(new_ligne);
    }
    var sec = document.querySelector("body");
    sec.appendChild(new_table);
});