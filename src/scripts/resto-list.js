import DATA from '../DATA.json'; /** Restaurant Data / List */

const restoList = document.querySelector(".resto-list__body");
const restaurants = DATA.restaurants;
restaurants.forEach(resto => {
    restoList.innerHTML += `
    <div class="card">
        <div class="card__header">
            <div class="city">
                ${resto.city}
            </div>
            <img class="card__image" src="${resto.pictureId}" alt="Restaurant Image">
            </img>
        </div>
        <div class="card__body">
            <h4>${resto.name}</h4>
            <p>${resto.description}</p>
            <span class="rating">Rating ${resto.rating}/5</span>
        </div>
    </div>
    `;
});