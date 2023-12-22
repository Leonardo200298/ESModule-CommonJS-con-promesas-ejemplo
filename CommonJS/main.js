// main.js
const { fetchData } = require('./promesa.js');

//con asincronia
const main = async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
};

main();
