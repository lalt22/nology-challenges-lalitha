/* This challenge build upon previous knowledge and introduces the concept of complex data types (arrays of objects) */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* Foundation Challenges */

/**
 * A function which takes an array of employee objects and returns just an array of their quotes so we can later put
 * them on the website.
 *
 * @param {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} employeeArr - An array of employee objects
 * @returns {string[]} A list of the employees quotes for the website
 */
 export const getEmployeeQuotes = (employeeArr) => {
    // Write code here
    return employeeArr.map((employee) => employee.quote);
  };
  
  /**
   * A function which takes an array of employee objects and returns a new array only containing employees that are managers.
   *
   * @param {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} employeeArr - An array of employee objects
   * @returns {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} An array containing only managers
   */
  export const getTheManagers = (employeeArr) => {
    // Write code here
    return employeeArr.filter((employee) => employee.isManagement == true);
  };
  
  /**
   * A function which tells you the number of keys on the provided object.
   *
   * @param {object} object - The provided object with an assortment of keys
   * @returns {number} The number of the keys on the object
   */
  export const getNumberOfKeys = (object) => {
    // Write code here
    return Object.keys(object).length;
  };
  
  /* Intermediate Challenges */
  
  /**
   * A function to find the most expensive item in the basket and returns it in order to offer this customer a discount
   * later on down the line.
   *
   * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number}[]} shoppingBasketArr - An array of basket items for an online shop
   * @returns {{name: string, price: number, hasFreeShipping: boolean, quantity: number}} The most expensive item in the shopping basket
   */
  export const findMostExpensiveItem = (shoppingBasketArr) => {
    // Write code here
    return shoppingBasketArr.sort((item1, item2) => item2.price-item1.price)[0];
  };
  
  /**
   * A function which add a new key of totalPrice to each shopping basket item in the array where total cost is
   * the price * the quantity of items ordered i.e.
   * {
   *  name: "jeans",
   *  price: 30,
   *  hasFreeShipping: false,
   *  quantity: 2,
   *  totalPrice: 60
   * }
   * Then returns a new array of objects
   *
   * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number}[]} shoppingBasketArr - An array of basket items for an online shop
   * @returns {{name: string, price: number, hasFreeShipping: boolean, quantity: number, totalPrice: number}[]} A new array where each object has had a total price added to it
   */
  export const settotalPrice = (shoppingBasketArr) => {
    // // Write code here
    // var totalPrice = shoppingBasketArr.reduce((acc, item) => acc += (item.price*item.quantity), 0);
    var newBasket = shoppingBasketArr.map(item  => ({...item, "totalPrice":(item.price*item.quantity)}));
    return newBasket;
  };
  
  /**
   * A function which sums the total cost of every item in the array and returns it as a single number.
   *
   * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number, totalPrice: number}[]} shoppingBasketArr - An array of basket items for an online shop
   * @returns {number} The total cost of the order
   */
  export const totalShoppingBasket = (shoppingBasketArr) => {
    // Write code here
    return shoppingBasketArr.reduce((acc, item) => acc += item.totalPrice, 0);
  };
  
  /* Advanced Challenges */
  
  /**
   * A function which takes an array of meal objects, removes unneeded keys from the objects and returns a new array of
   * meal objects.
   *
   * @param {{id: number, name: string, ingredients: string[], country: string, timeStamp: number, userCreated: string}[]} mealsArr - An array containing meal objects
   * @returns {{id: number, name: string, ingredients: string[], country: string}[]} An array of cleaned meal objects
   */
  export const getImportantKeys = (mealsArr) => {
    const cleaned = mealsArr.map(meal => {
      const {id, name, ingredients, country} = meal; 
      return {id, name, ingredients, country}
    });
    return cleaned;
  };
  
  /**
   * A function which takes an array of meal objects and check if every object contains the necessary keys. If a key is
   * missing it adds a default value instead.
   * default values:
   * isVegetarian = false
   * timeToCook = 15
   *
   * @param {{id: number, name: string, ingredients: string[], country: string, isVegetarian?: boolean, timeToCook?: number}[]} mealsArr - An array containing meal objects
   * @returns {{id: number, name: string, ingredients: string[], country: string, isVegetarian: boolean, timeToCook: number}[]}
   */
  export const setImportantKeys = (mealsArr) => {
    const mealsWithDefaults = mealsArr.map(meal => {
      const { id, name, ingredients, country, isVegetarian = false, timeToCook = 15 } = meal;
      return { id, name, ingredients, country, isVegetarian, timeToCook };
    });
  
    return mealsWithDefaults;
  };
  
  /* Expert Challenge */
  
  /**
   * A function that takes a raw response from a cocktail API and turn each object in the response into a cleaner form
   * so that it is easier to work with.
   *
   * @param {{
   *  idDrink: number,
   *  strDrink: string,
   *  strCategory: string,
   *  strAlcoholic: string,
   *  strInstructions: string,
   *  strIngredient1: string | null,
   *  strIngredient2: string | null,
   *  strIngredient3: string | null,
   *  strIngredient4: string | null,
   *  strIngredient5: string | null,
   *  strIngredient6: string | null
   * }[]} cocktailData - The raw response from the cocktail API
   * @returns {{
   *  id: number,
   *  drink: string,
   *  category: string,
   *  alcoholic: string,
   *  instructions: string,
   *  ingredients: string[],
   * }[]} A Cleaned array of cocktail data
   */
  export const cleanCocktailResponseData = (cocktailData) => {
    // Create a new array with cleaned cocktail data
    const cleanedCocktails = cocktailData.map(cocktail => {
      const {
        idDrink: id,
        strDrink: drink,
        strCategory: category,
        strAlcoholic: alcoholic,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6
      } = cocktail;

      //Filter out the ingredients that are null and store in ingredients[]
      const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6
      ].filter(ingredient => ingredient !== null);

      //Return mapped objects with cleaned and organised ingredients[] list
      return {id, drink, category, alcoholic, instructions, ingredients};
    });

    return cleanedCocktails;
  };