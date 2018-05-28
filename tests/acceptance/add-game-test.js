import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | add game', function(hooks) {
  setupApplicationTest(hooks);

  test('New match is added in the scoreboard when the user clicks the button', function(assert) {
    visit('/');


  });
});
