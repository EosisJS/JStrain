var corpsRdm = ["Visage", "Nez", "Cheveux", "Pieds"];
var adjRdm = ["Puant", "Pas gentil", "Stupide", "Moche"];
var motRdm = ["Oiseau", "Marmotte", "Table", "Pied", "Coin de table", "Encornet", "Dev js front-end"];


var corpsRdmSelect = corpsRdm[Math.floor(Math.random() * 4)];

var adjRdmSelect = adjRdm[Math.floor(Math.random() * 4)];

var motRdmSelect =motRdm[Math.floor(Math.random() * 7)];

var iFr = "Ton " + corpsRdmSelect + " ressemble a un " + adjRdmSelect + " " + motRdmSelect + "!!!";



