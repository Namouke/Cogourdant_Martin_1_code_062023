
// Recupération des informations du localstorage :
const panier = JSON.parse(localStorage.getItem("tableau"));

// Mise en place de l'affichage des total de la page cart.html

const totalQuantity = document.querySelector("#totalQuantity");
const spanTotalQuantity = document.createElement("span");
totalQuantity.appendChild(spanTotalQuantity);

let sommePanier = 0;

const totalPrice = document.querySelector("#totalPrice");
const spanTotalPrice = document.createElement("span");
totalPrice.appendChild(spanTotalPrice)

let prixTotal = 0;

// Mise en place d'une promise pour faire en sorte que tout sa déroule dans le bon sens

let promise = Promise.resolve();



// Mise en place d'une boucle pour mettre ses données en dynamique :

for (let i = 0; i < panier.length; i++) {

    const panierId = panier[i].idProduit;
    const panierQuantite = panier[i].quantiteProduit;
    const panierCouleur = panier[i].couleur;
    const produit = panier[i];


    const url = `http://localhost:3000/api/products/${panierId}`

    promise = promise.then(() => fetch(url))
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
            deleteItem.className = "deleteItem";
            deleteItem.innerText = "Supprimer";
            cart__item__content__settings__delete.appendChild(deleteItem);

            // Référence pour le classement de l'article
            const section = document.querySelector("#cart__items");
            section.appendChild(article);
            // console.log(section);

            // console.log(data)

            // Calcul somme des produit et le total du prix du panier :

            const panierPrix = data.price;

            prixTotal += panierQuantite * panierPrix;
            // console.log(prixTotal)
            sommePanier += panierQuantite;

            deleteItem.addEventListener('click', () => {

                // Supp du localStorage
                for (let j in panier) {
                    const p = panier[j]
                    if (
                        p.idProduit === panierId && p.couleur === panierCouleur

                    )
                        panier.splice(j, 1);
                }

                localStorage.setItem('tableau', JSON.stringify(panier));

                // Supp du DOM

                article.remove();

                // Mise a jour sommePanier et prixTotal

                sommePanier -= produit.quantiteProduit;
                spanTotalQuantity.innerHTML = sommePanier;

                prixTotal -= produit.quantiteProduit * panierPrix;
                spanTotalPrice.innerHTML = prixTotal;
            })

            input.addEventListener('input', () => {
                // modif LocalStorage
                for (let p of panier) {
                    if (
                        p.idProduit === panierId && p.couleur === panierCouleur
                    ) {
                        // Mise a jour sommePanier et prixTotal
                        const diff = p.quantiteProduit - input.value;
                        p.quantiteProduit = Number(input.value);

                        prixTotal -= diff * panierPrix;
                        spanTotalPrice.innerHTML = prixTotal;

                        sommePanier -= diff;
                        spanTotalQuantity.innerHTML = sommePanier;
                    }
                    // "mod" DOM
                    localStorage.setItem('tableau', JSON.stringify(panier));
                    console.log(panier)
                }
            });

        })
}



// Promise pour attendre la réponse des calcule du .then

promise.then(() => {
    spanTotalPrice.innerText = prixTotal;
    spanTotalQuantity.innerText = sommePanier;
})



