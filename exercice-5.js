window.addEventListener("DOMContentLoaded", function(){
	// votre code ici
	let users = [
		["Mari", "Doucet"],
		["Hugues", "Froger"],
		["Alex", "Terieur"],
		["Anne", "O'Neam"]
	];
    let new_table = document.createElement("table");
    var nb_val1 = users.length;
    for(var i=0;i<nb_val1;i++) { //on parcours les cases générales du tableau
        let new_ligne = document.createElement("tr");
        var nb_val2 = users[i].length;
        console.log(nb_val2);
        for(var j=0;j<nb_val2;j++) { //on parcours les cases des cases
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