import $ from 'jquery';
import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | add game', function(hooks) {
  setupApplicationTest(hooks);

  // test('New match is added in the scoreboard when the user clicks the button', async function(assert) {
  //   await visit('/');
  //
  //   const matchNumber = $('.match').length;
  //
  //   $('.add-game__select > input:eq(0)').val('Emily');
  //   $('.add-game__select > input:eq(0)').trigger('input');
  //   $('.add-game__select__suggestions > span:eq(0)').click();
  //   $('.add-game__select > input:eq(1)').val('Feng');
  //   $('.add-game__select > input:eq(1)').trigger('input');
  //   $('.add-game__select__suggestions > span:eq(0)').click();
  //   $('.add-game__button').click();
  //   assert.equal($('.match').length, matchNumber + 1, 'New match has been added');
  // });

  test('Match is removed from the list when delete button is pressed', async function(assert) {
    await visit('/');

    const matchNumber = $('.match').length;

    $('.match__delete:eq(1)').click();
    assert.equal($('.match').length, matchNumber - 1, 'Match deleted');
  });
});
