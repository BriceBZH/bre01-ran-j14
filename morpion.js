window.addEventListener("DOMContentLoaded", function(){
	let div1 = document.getElementById("div1");
	let div2 = document.getElementById("div2");
	let div3 = document.getElementById("div3");
	let div4 = document.getElementById("div4");
	let div5 = document.getElementById("div5");
	let div6 = document.getElementById("div6");
	let div7 = document.getElementById("div7");
	let div8 = document.getElementById("div8");
	let div9 = document.getElementById("div9");
	let i =0;
	if(i%2=0) {
    	div1.addEventListener("click", function(event){
        	alert("On a cliqué sur le bouton1!");
        });
        div2.addEventListener("click", function(event){
        	alert("On a cliqué sur le bouton2!");
        });
        div3.addEventListener("click", function(event){
        	alert("On a cliqué sur le bouton3!");
        });
        div4.addEventListener("click", function(event){
        	alert("On a cliqué sur le bouton4!");
        });
        div5.addEventListener("click", function(event){
        	alert("On a cliqué sur le bouton5!");
        });
        div6.addEventListener("click", function(event){
        	alert("On a cliqué sur le bouton6!");
        });
        div7.addEventListener("click", function(event){
        	alert("On a cliqué sur le bouton7!");
        });
        div8.addEventListener("click", function(event){
        	alert("On a cliqué sur le bouton8!");
        });
        div9.addEventListener("click", function(event){
        	alert("On a cliqué sur le bouton9!");
        });
	}
});