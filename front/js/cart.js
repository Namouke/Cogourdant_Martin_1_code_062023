
// Recupération des informations du localstorage :
const panier = JSON.parse(localStorage.getItem("tableau"));

// for (let i in panier) {
//let panierId = panier[i].idProduit;
//console.log(i)
//}

// for ( let produit of panier ) {
//console.log(produit)
//}

// Mise en place d'une boucle pour mettre ses données en dynamique :

// ANP 3 //

const totalQuantity = document.querySelector("#totalQuantity");
const spanTotalQuantity = document.createElement("span");
totalQuantity.appendChild(spanTotalQuantity);

let sommePanier = 0;
// ANP 3 //

// APTA 3 //
const totalPrice = document.querySelector("#totalPrice");
const spanTotalPrice = document.createElement("span");
totalPrice.appendChild(spanTotalPrice)

let prixTotal = 0;
// APTA 3 //

for (let i = 0; i < panier.length; i++) {

    const panierId = panier[i].idProduit;
    const panierQuantite = panier[i].quantiteProduit;
    const panierCouleur = panier[i].couleur;
    const panierPrix = panier[i].prix;

    const url = `http://localhost:3000/api/products/${panierId}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            // Mise en place du DOM avec les bonnes information :

            // création de l'arcticle //
            const article = document.createElement("article");
            article.className = "cart__item";
            article.setAttribute("data-id", panierId);
            article.setAttribute("data-color", panierCouleur);
            // console.log(article)

            // Image du produit //
            const cart__item__img = document.createElement("div");
            cart__item__img.className = "cart__item__img";
            article.appendChild(cart__item__img);
            // console.log(cart__item__img)

            const img = document.createElement("img");
            img.src = data.imageUrl;
            img.setAttribute(`alt`, data.altTxt);
            cart__item__img.appendChild(img);
            // console.log(img)

            // Contenu des produits //
            const cart__item__content = document.createElement("div");
            cart__item__content.className = "cart__item__content";
            article.appendChild(cart__item__content);
            // console.log(cart__item__content)

            // Div 1
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

            // Div 2
            const cart__item__content__settings = document.createElement("div");
            cart__item__content__settings.className = "cart__item__content__settings";
            cart__item__content.appendChild(cart__item__content__settings);

            // Div 2.1

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

            // Div 2.2

            const cart__item__content__settings__delete = document.createElement("div");
            cart__item__content__settings__delete.className = "cart__item__content__settings__delete";
            cart__item__content__settings.appendChild(cart__item__content__settings__delete);

            const deleteItem = document.createElement("p");
            deleteItem.innerText = "Supprimer";
            cart__item__content__settings__delete.appendChild(deleteItem);

            // Référence pour le classement de l'article
            const section = document.querySelector("#cart__items");
            section.appendChild(article);
            // console.log(section);

            // console.log(data)

            // Afficher le nombre de produit
            // Etape 1 : Mettre les quantités dans un seul et même tableau :

            const panierQuantites = [];
            for (let i = 0; i < panier.length; i++) {
                const panierQuantite = panier[i].quantiteProduit;
                panierQuantites.push(panierQuantite);
                // console.log(panierQuantites)
            };

            // Etape 2 : En faire l'addition 

            let sommePanier = 0;
            for (let i = 0; i < panierQuantites.length; i++) {
                sommePanier += panierQuantites[i];
            };

            // console.log(sommePanier)
            // console.log(panierQuantites);

            // Etape 3 : Mettre en dynamique
            // Pour évité la création de plusieurs span il faut sortie de la boucle
            // Etape 3 = // ANP 3 //

            // Afficher le prix total des articles
            // Etape 1 : Mettre les résultat de la multipication des articles

            const tableauPrixArticle = [];
            for (let i = 0; i < panier.length; i++) {
                const sommeParArticle = panier[i].quantiteProduit * panier[i].prix;
                tableauPrixArticle.push(sommeParArticle)
                // console.log(sommeParArticle);
            }
            // console.log(tableauPrixArticle);

            // Etape 2 : Faire l'addition des elements du nouveau tableau tableaPrixArticle

            let prixTotalArticle = 0;
            for (let i = 0; i < tableauPrixArticle.length; i++) {
                prixTotalArticle += tableauPrixArticle[i];
            }
            //console.log(prixTotalArticle);

            // Etape 3 : Mettre en dynamique
            // Pour évité la création de plusieurs span il faut sortie de la boucle
            // Etape 3 = // APTA 3 //

        });

    // ANP 3 //

    sommePanier += panierQuantite;

    // ANP 3 //

    // APTA 3 //

    prixTotal += panierQuantite * panierPrix;

    // APTA 3 //



    // console.log(panierId)

    //console.log(panier[i].idProduit)

    // {idProduit: '*', quantiteProduit: *, couleur: '*'}

    // altTxt: colors: description: imageUrl: name: price: _id:
}

// ANP 3 //

spanTotalQuantity.innerText = sommePanier;

// ANP 3 //

// APTA 3 //

spanTotalPrice.innerText = prixTotal;

// APTA 3 //







