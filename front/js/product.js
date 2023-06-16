
// Le fichier product.js a pour but de mettre en relation la page d'accueil et la page produit de notre site.

const productId = new URL(location.href).searchParams.get("id");

const url = `http://localhost:3000/api/products/${productId}`;

fetch(url)
    .then(res => res.json())
    .then(dataId => {

        let myDataId = dataId;
        console.log(myDataId)

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

        // 30 à 55%

        // Envoyer les produits de la page product.html dans un localstorage

        const btnAjouterPanier = document.getElementById("addToCart");

        btnAjouterPanier.addEventListener("click", () => {

            const arrayProduit = [
                idProduit = productId,
                quantiteProduit = quantity.value,
                couleur = colors.value
            ];

            console.log(arrayProduit);

        });


    });

