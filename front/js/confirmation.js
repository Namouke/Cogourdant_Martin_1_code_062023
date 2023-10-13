
// Afficher le numéro de commande : 

const params = new URL(document.location).searchParams;
const orderId = params.get("orderId");


document.getElementById("orderId").textContent = orderId;

// 90% à 100% des étapes clefs du projet.