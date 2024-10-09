const form = document.querySelector(".search-form");
const recipeList = document.querySelector(".recipe-list");
const recipeDetails = document.querySelector(".recipe-details");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputValue = event.target[0].value;

  buscarReceitas(inputValue);
});

async function buscarReceitas(ingrediente) {
  recipeList.innerHTML = `Carregando receitas...`;
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}&lang=pt_br`
    );
    const data = await response.json();

    mostrarReceitas(data.meals);
  } catch (err) {
    recipeList.innerHTML = `<p>Nenhuma receita encontrada</p>`;
  }
}

function mostrarReceitas(receitas) {
  recipeList.innerHTML = receitas
    .map(
      (item) =>
        `
        <div class="recipe-card" onclick="obterDetalhesReceitas(${item.idMeal})">
            <img src="${item.strMealThumb}" alt="Foto da Receita">
            <h3>${item.strMeal}</h3>
        </div>
    `
    )
    .join("");
}

async function obterDetalhesReceitas(id) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}&lang=pt_br`
  );
  const data = await response.json();
  const receita = data.meals[0];

  let ingredientes = "";

  for (let i = 1; i <= 20; i++) {
    if (receita[`strIngredient${i}`]) {
      ingredientes += `<li>${receita[`strIngredient${i}`]} - ${
        receita[`strMeasure${i}`]
      }</li>`;
    } else {
      break;
    }
  }

  recipeDetails.innerHTML = `
    <h2>${receita.strMeal}</h2>
    <img src="${receita.strMealThumb}" alt="${receita.strMeal}">
    <h3>Categoria: ${receita.strCategory}</h3>
    <h3>Origem: ${receita.strArea}</h3>
    <h3>Ingredientes:</h3>
    <ul>${ingredientes}</ul>
    <h3>Instruções:</h3>
    <p>${receita.strInstructions}</p>
    <p>Tags: ${receita.strTags}</p>
    <p>Vídeo: <a href="${receita.strYoutube}" target="_blank">Assista no Youtube</a></p>
  `;
}
