import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => `
  <div class="card" tabindex="0">
    <div class="card__header">
        <div class="city">
            ${resto.city}
        </div>
        <img class="card__image" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="Restaurant">
        </img>
    </div>
    <div class="card__body">
        <a href="#/detail/${resto.id}">
          <h4>${resto.name}</h4>
          <p>${resto.description}</p>
        </a>
        <span class="rating">Rating ${resto.rating}/5</span>
    </div>
  </div>
`;

const createRestoDetailTemplate = (resto) => `
  <div class="detail">
    <div class="detail-header">
      <div class="city">
        ${resto.city}
      </div>
      <img class="detail-image" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="Restaurant">
      </img>
    </div>
    <div class="detail-body">
      <div class="detail-title">
        ${resto.name}
      </div>
      <div class="detail-address">
        ${resto.address}
      </div>
      <div class="detail-rating" id="ratingContainer">${resto.rating}</div>
      <div class="detail-category" id="categoryContainer"></div>
    </div>
  </div>
`;

const createRestoMenuTemplate = () => `
  <div class="menu">
    <div class="menu-header">
      <div class="menu-title">
        <h4>Menu</h4>
      </div>
    </div>
    <div class="menu-body" id="menuContainer">
    </div>
  </div>
`;

const createRestoReviewTemplate = () => `
  <div class="review" id="reviewContainer">
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createRestoMenuTemplate,
  createRestoReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
