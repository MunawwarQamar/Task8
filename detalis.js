let urlParams = new URLSearchParams(window.location.search);
let pizzaID= urlParams.get('pizza_id');

async function getPizza (id){
    const {data} = await axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
   let {title , image_url,ingredients}=data.recipe
   document.querySelector('.title').textContent=title;
   document.querySelector('.type').src=image_url;
   document.querySelector ('.ingredients').innerHTML=ingredients.map(function(item){
    return `<li>${item}</li>`
   }).join('');
}


getPizza(pizzaID);