/****************** Fetch *************************/

async function getData() {
  const response = await fetch(
    "https://forkify-api.herokuapp.com/api/search?q=pizza"
  );
  const data = await response.json();
  const recipes = data.recipes;
  console.log(recipes);

  let divContant = recipes
    .map(function (item) {
      return `
        <div>
            <img src="${item.image_url}" alt="image">
            <h2>${item.title}</h2>
            <a href="details.html?pizza_id=${item.recipe_id}"> see details </a>
            </div>
        `;
    })
    .join("");
  let divHtml = document.querySelector("div");
  divHtml.innerHTML = divContant;
}
//getData() ;

/**************** Axois *************************/
async function getPizzaUsingAxois() {
  const { data } = await axios.get(
    "https://forkify-api.herokuapp.com/api/search?q=pizza"
  );
  console.log(data);
  let divContant = data.recipes
    .map(function (item) {
      return `
        <div>
            <img src="${item.image_url}" alt="image">
            <h2>${item.title}</h2>
            <a href="details.html?pizza_id=${item.recipe_id}"> see details </a>
            </div>
        `;
    })
    .join("");
  let divHtml = document.querySelector("div");
  divHtml.innerHTML = divContant;
}

getPizzaUsingAxois();

/* 
The syntax of Fetch and Axios are similar, but there are some differences. Here are some of the main ones:
Fetch accepts the URL as the first argument and an optional options object as the second argument. Axios can take the URL as the first argument and an options object as the second argument, or an object that contains both the URL and the options as the first argument.
Fetch uses the body property to send data to the server, while Axios uses the data property. Fetch also requires the data to be stringified, while Axios automatically converts the data to and from JSON.
Fetch returns the response object itself, which contains other information such as status, headers, and a URL. Axios returns the data in the response object, which is more convenient for accessing the data directly.
Fetch only rejects the promise if there is a network error, not if the response has an error status. Axios handles errors in the catch block, which makes it easier to deal with error responses.
*/
