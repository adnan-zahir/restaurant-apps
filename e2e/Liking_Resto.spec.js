/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('checking that the list is empty', ({ I }) => {
  I.dontSeeElement('#restoCardBody .card');
});

Scenario('liking one resto', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('#restoCardBody .card');
  const firstRestoName = await I.grabTextFrom(locate('#restoCardBody .card__body a').first());
  I.click(locate('#restoCardBody .card__body a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('#restoCardBody .card');
  const likedRestoName = await I.grabTextFrom('#restoCardBody .card__body a');

  assert.strictEqual(firstRestoName, likedRestoName);
});

Scenario('liking multiple restos', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('#restoCardBody .card');

  const resto = [];
  for (let i = 1; i <= 3; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    resto.push(await I.grabTextFrom(locate('#restoCardBody .card__body a h4').at(i)));
    I.click(locate('#restoCardBody .card__body a').at(i));
    I.seeElement('#likeButton[aria-label="like this resto"]');
    I.click('#likeButton');
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorites');
  const numberOfLikedResto = await I.grabNumberOfVisibleElements('#restoCardBody .card');

  assert.strictEqual(numberOfLikedResto, resto.length);
});
