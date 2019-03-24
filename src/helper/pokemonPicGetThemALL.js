const axios = require('axios');

const pokeList = Array.from({ length: 20 }, () =>
  axios.get(
    'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 500)
  )
);

const pokeItems = [];

async function f() {
  await Promise.all(pokeList)
    .then(res => res.forEach(e => pokeItems.push(e.data.sprites.front_shiny)))
    .catch(err => console.log(err));
}

f();

export default pokeItems;
