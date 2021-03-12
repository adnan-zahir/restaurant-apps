import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const RestoList = {
  async render() {
    return `
      <div class="resto-card__header" tabindex="0">
        <h3>Restaurant List</h3>
      </div>
      <div class="resto-card__body" id="restoCardBody">
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.restaurantList();
    const restoContainer = document.querySelector('#restoCardBody');
    restaurants.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default RestoList;
