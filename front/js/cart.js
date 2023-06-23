

const panier = JSON.parse(localStorage.getItem("tableau"));

// for (let i in panier) {

    //let panierId = panier[i].idProduit;
    //console.log(i)
//}



// for ( let produit of panier ) {
    
    //console.log(produit)
//}

let prixTotal = 0;

for (let i = 0; i < panier.length; i++ ){

    const panierId = panier[i].idProduit;
    const panierQuantite = panier[i].quantiteProduit;
    const panierCouleur = panier[i].couleur;
    
    const url = `http://localhost:3000/api/products/${panierId}`

    fetch(url)
    .then(res => res.json())
    .then(data => {

        console.log(data)

    })

    console.log(panierId)

    //console.log(panier[i].idProduit)

    
}

 // {idProduit: '*', quantiteProduit: *, couleur: '*'}





