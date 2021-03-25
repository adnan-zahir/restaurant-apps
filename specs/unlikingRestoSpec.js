/* eslint-disable no-undef */
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestoIdb from '../src/scripts/data/favoriterestaurant-idb';

describe('Unliking Restaurant', () => {
  const resto = {
    id: 'abc',
    name: 'Resto a',
  };

  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    // eslint-disable-next-line no-unused-vars
    const likeButtonContainer = document.getElementById('likeButtonContainer');
  };

  const addLikeButton = async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer,
      favoriteResto: FavoriteRestoIdb,
      resto,
    });
  };

  const clickUnlikeButton = () => {
    const likeButton = document.querySelector('#likeButton');
    likeButton.dispatchEvent(new Event('click'));
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoIdb.putResto(resto);
  });

  it('should show the unlike button and not the like button', async () => {
    await addLikeButton();

    expect(document.querySelector('[aria-label="unlike this resto"]'))
      .toBeTruthy();
    expect(document.querySelector('[aria-label="like this resto"]'))
      .toBeFalsy();
  });

  it('should be able to remove resto from favorite', async () => {
    await addLikeButton();

    clickUnlikeButton();

    expect(await FavoriteRestoIdb.getAllRestos())
      .toEqual([]);
  });

  it('it should not throw an error if the unliked movie is not on the list', async () => {
    await addLikeButton();

    await FavoriteRestoIdb.deleteResto(resto.id);

    clickUnlikeButton();

    expect(await FavoriteRestoIdb.getAllRestos())
      .toEqual([]);
  });
});
