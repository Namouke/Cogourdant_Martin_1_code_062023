

const panier = JSON.parse(localStorage.getItem("tableau"));

// for (let i in panier) {

//let panierId = panier[i].idProduit;
//console.log(i)
//}



// for ( let produit of panier ) {

//console.log(produit)
//}

// let prixTotal = 0;

for (let i = 0; i < panier.length; i++) {

    const panierId = panier[i].idProduit;
    const panierQuantite = panier[i].quantiteProduit;
    const panierCouleur = panier[i].couleur;

    const url = `http://localhost:3000/api/products/${panierId}`

    fetch(url)
        .then(res => res.json())
        .then(data => {

            // création de l'arcticle //
            const article = document.createElement("article");
            article.className = "cart__item";
            article.setAttribute("data-id", panierId);
            article.setAttribute("data-color", panierCouleur);
            // console.log(article)

            // image du produit //
            const cart__item__img = document.createElement("div");
            cart__item__img.className = "cart__item__img";
            article.appendChild(cart__item__img);
            // console.log(cart__item__img)

            const img = document.createElement("img");
            img.src = data.imageUrl;
            img.setAttribute(`alt`, data.altTxt);
            cart__item__img.appendChild(img);
            // console.log(img)

            // contenu des produits //
            const cart__item__content = document.createElement("div");
            cart__item__content.className = "cart__item__content";
            article.appendChild(cart__item__content);
            // console.log(cart__item__content)

            // div 1
            const cart__item__content__description = document.createElement("div");
            cart__item__content__description.className = "cart__item__content__description";
            cart__item__content.appendChild(cart__item__content__description);
            // console.log(cart__item__content__description);

            const titre = document.createElement("h2");
            titre.innerText = data.name;
            cart__item__content__description.appendChild(titre);

            const couleur = document.createElement("p");
            couleur.innerText = panierCouleur;
            cart__item__content__description.appendChild(couleur);

            const prix = document.createElement("p");
            prix.innerText = data.price + " €";
            cart__item__content__description.appendChild(prix);

            // div 2
            const cart__item__content__settings = document.createElement("div");
            cart__item__content__settings.className = "cart__item__content__settings";
            cart__item__content.appendChild(cart__item__content__settings);

            // div 2.1

            const cart__item__content__settings__quantity = document.createElement("div");
            cart__item__content__settings__quantity.className = "cart__item__content__settings__quantity";
            cart__item__content__settings.appendChild(cart__item__content__settings__quantity);
            // console.log(cart__item__content__settings__quantity)

            const qte = document.createElement("p");
            qte.innerText = "Qté : "
            cart__item__content__settings__quantity.appendChild(qte);

            const input = document.createElement("input");
            input.type = "number";
            input.className = "itemQuantity";
            input.name = "itemQuantity";
            input.min = "1";
            input.max = "100";
            input.value = panierQuantite;
            cart__item__content__settings__quantity.appendChild(input);

            // div 2.2

            const cart__item__content__settings__delete = document.createElement("div");
            cart__item__content__settings__delete.className = "cart__item__content__settings__delete";
            cart__item__content__settings.appendChild(cart__item__content__settings__delete);

            const deleteItem = document.createElement("p");
            deleteItem.innerText = "Supprimer";
            cart__item__content__settings__delete.appendChild(deleteItem);

            // référence pour le classement de l'article
            const section = document.querySelector("#cart__items");
            section.appendChild(article);
            // console.log(section);

            // console.log(data)

            // Calcul des produit :

            const panierQuantites = [];

            for (let i = 0; i < panier.length; i++) {
                const panierQuantite = panier[i].quantiteProduit;
                panierQuantites.push(panierQuantite);
            }

            let sommePanier = 0;

            for (let i = 0; i < panierQuantites.length; i++) {
                sommePanier += panierQuantites[i];
            }

            console.log(sommePanier)
            console.log(panierQuantites);


        })






    // console.log(panierId)

    //console.log(panier[i].idProduit)

    // {idProduit: '*', quantiteProduit: *, couleur: '*'}

    // altTxt: colors: description: imageUrl: name: price: _id:
}







