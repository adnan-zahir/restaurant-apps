import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.css';
import DATA from '../DATA.json'; 

console.log('Hello Coders! :)');

const restaurants = DATA.restaurants;

restaurants.forEach(res => {
    console.log(res);
})