import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import {
  createRestoDetailTemplate,
  createRestoMenuTemplate,
  createRestoReviewTemplate,
} from '../templates/template-creator';
import RatingGenerator from '../../utils/rating-generator';
import CategoryGenerator from '../../utils/category-generator';
import MenuGenerator from '../../utils/menu-generator';
import MenuDropdownInitiator from '../../utils/menu-dropdown-initiator';
import ReviewInitiator from '../../utils/review-initiator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestoIdb from '../../data/favoriterestaurant-idb';

const Detail = {
  async render() {
    return `
      <div class="resto-card__header" tabindex="0">
        <h3>Restaurant Detail</h3>
      </div>
      <div class="resto-card__body" id="restoCardBody">
        <div id="likeButtonContainer"></div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailResto(url.id);
    const restoContainer = document.querySelector('#restoCardBody');
    restoContainer.innerHTML += createRestoDetailTemplate(restaurant)
      + createRestoMenuTemplate()
      + createRestoReviewTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavoriteRestoIdb,
      resto: restaurant,
    });

    RatingGenerator.init({
      container: document.querySelector('#ratingContainer'),
      value: document.querySelector('#ratingContainer').innerText,
    });

    CategoryGenerator.init({
      container: document.querySelector('#categoryContainer'),
      categories: restaurant.categories,
    });

    MenuGenerator.init({
      container: document.querySelector('#menuContainer'),
      menus: restaurant.menus,
    });

    ReviewInitiator.init({
      container: document.querySelector('#reviewContainer'),
      reviews: restaurant.customerReviews,
      restaurant,
    });

    MenuDropdownInitiator.init({
      buttons: document.querySelectorAll('.menu-dropdown-btn'),
    });
  },
};

export default Detail;
