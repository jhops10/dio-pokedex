
const offset = 0;
const limit = 10;

const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`


fetch(url).then((res) => {
  console.log(res)
});


const x = 10 + 10;
console.log(x);