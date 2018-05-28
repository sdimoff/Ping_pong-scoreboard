import { module, test } from 'qunit';
import { visit, andThen } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | add game', function(hooks) {
  setupApplicationTest(hooks);

  test('New match is added in the scoreboard when the user clicks the button', function(assert) {
    visit('/');

    andThen(function() {
      const matchNumber = $('.match').length;

      $('.add-game__button').click();
      assert.equal($('.match').length, matchNumber + 1, 'New match has been added');
    })
  });
});
