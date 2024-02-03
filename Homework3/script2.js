fetch("https://dummyjson.com/products")
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (response) {
    console.log(response);
    //1.
    let allLaptopsDecendingPrice = response.products.filter(
      (product) => product.category === "laptops"
    );
    console.log(allLaptopsDecendingPrice);
    //2.
    let firstGroceryItem = response.products.filter((item) => item.id === 1);
    console.log(firstGroceryItem);
    //3.
    let firstSamsung = response.products.findIndex(
      (index) => index.brand.toLowerCase() === "samsung"
    );
    console.log(firstSamsung);
    //4.
    let findSony = response.products.find((item) => item.brand === "sony");
    console.log(findSony);
    //5.
    let nameSkincareProducts = response.products
      .filter((item) => item.category === "skincare")
      .sort((a, b) => b.rating - a.rating);
    console.log(nameSkincareProducts[0].title);
    //6.
    let averageDiscontPercentage = response.products
      .filter((item) => item.rating > 4.5)
      .map((item) => item.discountPercentage);
    let averageResult =
      averageDiscontPercentage.reduce((acc, curr) => acc + curr, 0) /
      averageDiscontPercentage.length;
    console.log(averageResult);
    //7.
    let productHighestPrice = response.products.sort(
      (a, b) => b.price - a.price
    );
    console.log(productHighestPrice[0]);
    //8.
    let averagePriceIphone = response.products
      .filter(
        (item) => item.brand === "Apple" && item.category === "smartphones"
      )
      .map((item) => item.price);
    let averagePrice =
      averagePriceIphone.reduce((acc, curr) => acc + curr, 0) /
      averagePriceIphone.length;
    console.log(averagePrice);
    //9.
    let lowestPriceProducts = response.products
      .sort((a, b) => a.price - b.price)
      .map((item) => item.title);
    console.log(lowestPriceProducts[0]);
  })
  .catch(function (error) {
    console.error(error);
  });
