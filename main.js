const favoriteFoods = {
  breakfast: "french toast",
  lunch: "cheddar bowls",
  dinner: "turkey and mashed potatoes",
  dessert: "brownies and icecream"
};
// const breakfastCard = `
// <div class="card" style="width: 18rem;">
//   <div class="card-body"> 
//     {" "}
//     <h5 class="card-title">${favoriteFoods.breakfast}</h5>{" "}
//     <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>{" "}
//     <p class="card-text">
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </p>{" "}
//     <a href="#" class="card-link">
//       Card link
//     </a>{" "}
//     <a href="#" class="card-link">
//      Another link
//     </a>
//   </div>
// </div>
// `;
//console.log(favoriteFoods.dinner);
//$(".col").append(breakfastCard);
const characters = [
  {
    name: "Leslie Knope",
    location: "Pawnee",
    loves: "waffles",
  },
  {
    name: "Ron Swanson",
    location: "Pawnee",
    loves: "Guns",
  },
  {
    name: "Tom Haberford",
    location: "Pawnee",
    loves: "Coconut water",
  },
  {
    name: "April Ludgate",
    location: "Pawnee",
    loves: "Gore",
  },
];
for (let i = 0; i < characters.length; i++) {
  const characterCard = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${characters[i].name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${characters[i].location}</h6>
      <p class="card-text">i love ${characters[i].loves}.</p>

    </div>
  </div>
    `;
    $(".col").append(characterCard);
}
