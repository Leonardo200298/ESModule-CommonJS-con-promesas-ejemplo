// main.js
import { fetchData } from './promesa.js';

const main = async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
};

main();
