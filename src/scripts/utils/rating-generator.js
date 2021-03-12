/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const RatingGenerator = {
  init({ container, value }) {
    this._generateRating(container, value);
  },

  _generateRating(container, value) {
    const rating = parseFloat(value) * 20;
    const percentage = `${rating}%`;
    container.innerHTML = `
    <div class="star-ratings-css">
      <div class="star-ratings-css-top" style="width: ${percentage}">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
      <div class="star-ratings-css-bottom">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
    </div>
    `;
  },
};

export default RatingGenerator;
