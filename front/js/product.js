
// Le fichier product.js a pour but de mettre en relation la page d'accueil et la page produit de notre site.

const productId = new URL(location.href).searchParams.get("id");

const url = `http://localhost:3000/api/products/${productId}`; // récupération des données du produit séléctionné.

fetch(url)
    .then(res => res.json())
    .then(dataId => {

        let myDataId = dataId;
        // console.log(myDataId)

        // Modification et incorporation des elements dans l'HTML : 

        const imageKanap = document.querySelector(".item__img");
        const imgId = document.createElement("img");
        imgId.src = myDataId.imageUrl;
        imgId.setAttribute(`alt`, dataId.altTxt);
        imageKanap.appendChild(imgId);

        const nameKanap = document.querySelector("#title");
        const nameId = document.createElement("h1");
        nameId.innerText = myDataId.name;
        nameKanap.appendChild(nameId);

        const priceKanap = document.querySelector("#price");
        const priceId = document.createElement("span");
        priceId.innerText = myDataId.price;
        priceKanap.appendChild(priceId);

        const descriptionKanap = document.querySelector("#description");
        const descriptionId = document.createElement("p");
        descriptionId.innerText = myDataId.description;
        descriptionKanap.appendChild(descriptionId);

        const myArrayId = dataId.colors;

        for (let i in myArrayId) {
            const optionKanap = document.querySelector("#colors");
            const optionColors = document.createElement('option');
            optionColors.value = myArrayId[i];
            optionColors.text = myArrayId[i];
            // console.log(optionColors)
            optionKanap.appendChild(optionColors);
        }

        // 30 à 55% des étapes clefs du projet.

        // Envoyer les produits de la page product.html dans un localstorage

        const btnAjouterPanier = document.getElementById("addToCart");

        btnAjouterPanier.addEventListener("click", () => {

            const optionProduit = {
                idProduit: productId,
                quantiteProduit: +quantity.value, // Number(quantity.value), // JSON.parse(quantity.value),
                couleur: colors.value,
            };

            if (quantiteProduit.value == 0 ||
                couleur.value == null) {
                alert("Vous devez corectement renseigner vos coordonnées.")
            }

            // Création d'un tableau pour ranger tout les ajouts au panier 

            if (
                localStorage.getItem("tableau") === null
            ) {
                localStorage.setItem("tableau", JSON.stringify([]));
            }

            // Ajout des produits dans mon tableau :


            const tableau = JSON.parse(localStorage.getItem("tableau"));


            // Etape 2 Regarder dans le tableau si il y a déjà un produit avec la même couleur + ID 

            let dejaModifier = false;

            for (let produitPanier of tableau) {
                if (
                    // Si oui => modifier quantity
                    produitPanier.idProduit === optionProduit.idProduit &&
                    produitPanier.couleur === optionProduit.couleur
                ) {
                    produitPanier.quantiteProduit += optionProduit.quantiteProduit
                    dejaModifier = true
                }
            }

            if (
                dejaModifier === false
            ) {
                tableau.push(optionProduit)
            }

            console.log(tableau)

            // Etape 3 sauvegarder dans le localstorage.

            localStorage.setItem("tableau", JSON.stringify(tableau));

            // produit.push()

            // Ajouter un élément dans un tableau 

            // 55% à 65% des étapes clefs du projet.


        });


    });


