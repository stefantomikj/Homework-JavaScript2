fetch("https://dummyjson.com/recipes")
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (result) {
    console.log(result);

    //1.
    let allDeserts = result.recipes.filter((recipes) =>
      recipes.mealType.includes("Dessert")
    );
    console.log(allDeserts);
    //2.
    let recipesReviews = result.recipes
      .filter((recipesReview) => recipesReview.reviewCount > 30)
      .map((receptName) => receptName.name);
    console.log(recipesReviews);
    //3.
    let receptWithCinnamon = result.recipes.filter((recept) =>
      recept.ingredients.includes("Cinnamon")
    );
    console.log(receptWithCinnamon);

    //4.
    let lunchAndDinner = result.recipes.filter(
      (recipe) =>
        recipe.mealType.includes("Lunch") && recipe.mealType.includes("Dinner")
    );
    console.log(lunchAndDinner);
    //5.
    let mangoSalsaChickenIngredements = result.recipes.find(
      (recipe) => recipe.name === "Mango Salsa Chicken"
    );
    console.log(mangoSalsaChickenIngredements.ingredients);
    //6.
    let averCaloriesAmericanCusine = result.recipes.filter(
      (recipe) => recipe.cuisine === "American"
    );
    console.log(averCaloriesAmericanCusine[0].caloriesPerServing);
    //7.
    let averageCookTimePasta = result.recipes.filter((recipe) =>
      recipe.tags.includes("Pasta")
    );
    let timeCook =
      averageCookTimePasta
        .map((recipe) => recipe.cookTimeMinutes)
        .reduce((sum, item) => (sum += item), 0) / averageCookTimePasta.length;
    console.log(timeCook);
    //8.
    let recipeLowReviews = result.recipes.sort(
      (a, b) => a.reviewCount - b.reviewCount
    );
    console.log(recipeLowReviews[0]);
  })
  .catch(function (error) {
    console.error(error);
  });
