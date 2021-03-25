/* eslint-disable no-undef */
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestoIdb from '../src/scripts/data/favoriterestaurant-idb';

describe('Liking Restaurant', () => {
  const resto = {
    id: 'abc',
    name: 'Resto a',
  };

  const addLikeButton = async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer,
      favoriteResto: FavoriteRestoIdb,
      resto,
    });
  };

  const clickLikeButton = () => {
    const likeButton = document.querySelector('#likeButton');
    likeButton.dispatchEvent(new Event('click'));
  };

  beforeEach(async () => {
    await FavoriteRestoIdb.deleteResto(resto.id);
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    // eslint-disable-next-line no-unused-vars
    const likeButtonContainer = document.getElementById('likeButtonContainer');
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto(resto.id);
  });

  it('should show the like button when no resto liked', async () => {
    await addLikeButton();

    expect(document.querySelector('[aria-label="like this resto"]'))
      .toBeTruthy();
    expect(document.querySelector('[aria-label="unlike this resto"]'))
      .toBeFalsy();
  });

  it('should add the resto if the like button is clicked', async () => {
    await addLikeButton();

    clickLikeButton();

    expect(await FavoriteRestoIdb.getResto(resto.id))
      .toEqual(resto);
  });

  it('should not add the resto if it already exists', async () => {
    await addLikeButton();

    await FavoriteRestoIdb.putResto(resto);

    clickLikeButton();

    expect(await FavoriteRestoIdb.getAllRestos())
      .toEqual([resto]);
  });

  it('should not add the resto if it has no id', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer,
      favoriteResto: FavoriteRestoIdb,
      resto: {},
    });

    clickLikeButton();

    expect(await FavoriteRestoIdb.getAllRestos())
      .toEqual([]);
    expect(document.querySelector('[aria-label="like this resto"]'))
      .toBeTruthy();
    expect(document.querySelector('[aria-label="unlike this resto"]'))
      .toBeFalsy();
  });
});
