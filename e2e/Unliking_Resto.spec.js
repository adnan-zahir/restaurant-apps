/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Resto');

Before(({ I }) => {
  I.amOnPage('/');
  I.click(locate('#restoCardBody .card__body a').first());
  I.click('#likeButton');
  I.amOnPage('/#/favorites');
});

Scenario('unliking one resto', async ({ I }) => {
  I.seeElement('#restoCardBody .card');
  I.click('#restoCardBody .card__body a');

  I.seeElement('[aria-label="unlike this resto"]');
  I.click('[aria-label="unlike this resto"]');

  I.amOnPage('/#/favorites');
  I.dontSeeElement('#restoCardBody .card');
  const numberOfRestoLiked = await I.grabNumberOfVisibleElements('#restoCardBody .card');

  assert.strictEqual(numberOfRestoLiked, 0);
});
