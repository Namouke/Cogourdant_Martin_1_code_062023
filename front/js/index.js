
// Le fichier index.js a pour but de mettre en application les recommandations de Frank de manière dynamique.

const url = 'http://localhost:3000/api/products'; // Adresse de récupération de l'API en ligne.

// Demande des ressources de l'API 

fetch(url) // Adresse donner par la documentation de Bilal
  .then(res => res.json()) // Transformation des fichiers en json 
  .then(data => {
    // console.log(data);
    for (let i = 0; i < data.length; i++) {
      const { name, _id, imageUrl, altTxt, description } = data[i]
      // console.log(name);

      // Grâce à cette console.log on peut obtenir toutes les informations dont nous avons besoin.

      // Modification et incorporation des elements dans l'HTML : 

      const a = document.createElement('a')
      a.href = `./product.html?id=${_id}`;

      const sectionItem = document.querySelector("#items");
      sectionItem.appendChild(a);
      //console.log(sectionItem)

      const article = document.createElement('article');
      a.appendChild(article);
      console.log(article)

      const img = document.createElement('img');
      img.src = imageUrl;
      img.setAttribute(`alt`, altTxt);
      article.appendChild(img);

      const h3 = document.createElement('h3');
      h3.innerText = name;
      article.appendChild(h3);

      const p = document.createElement('p');
      p.innerText = description;
      article.appendChild(p);

      // console.log(a)

      // Ce console.log nous permet de vérifier que nos éléments sont bien à la bonne place.

      // 0 à 30 % des étapes clefs du projet.
    }
  });

























