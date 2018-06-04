import Ember from 'ember';
import Component from '@ember/component';
import EmberObject from '@ember/object';
const { inject } = Ember;
import { observer } from '@ember/object';

export default Component.extend({
  matchedOne: null,

  matchedTwo: null,

  playerOne:'',

  playerTwo:'',

  matchScores: inject.service(),

  matchedOneComputed: observer('playerOne' , function () {
    const { playerOne } = this;

    const matches = playerOne === '' ? null : this.getFilteredPlayers(playerOne);
    this.set('matchedOne', matches);
  }),

  matchedTwoComputed: observer('playerTwo' , function () {
    const { playerTwo } = this;
    const matches = playerTwo === '' ? null : this.getFilteredPlayers(playerTwo);
    this.set('matchedTwo', matches);
  }),

  getFilteredPlayers(value) {
    return this.get('matchScores.players').filter(player => player.name.includes(value))
  },

  actions: {
    setPlayer(whichPlayer, playerName) {
      if (playerName !== this.playerOne &&
          playerName !== this.playerTwo) {

        this.set(whichPlayer, playerName);

        this.set('matchedOne', null);
        this.set('matchedTwo', null);

      }
    },

    addGame() {
      const matches = this.get('matchScores.matches');

      if (this.playerOne !== '' &&
          this.playerTwo !== '') {
        matches.addObject(EmberObject.create({
          id: matches.length + 1,
          playerOneName: this.playerOne,
          playerOnePic: 'https://www.drodd.com/images16/smiley-emoji09.jpg',
          playerTwoName: this.playerTwo,
          playerTwoPic: 'https://www.drodd.com/images16/smiley-emoji09.jpg',
          get latestScore() {
            return this.previousScores[this.previousScores.length - 1];
          },
          get firstWon() {
            const eachScore = this.previousScores[this.previousScores.length - 1].split('-');

            return eachScore[0] > eachScore[1];
          },
          previousScores: [
            '11-7',
            '11-3',
            '7-11',
            '11-8',
            '4-2',
          ]
        }))
      } else {

        return false;
      }
    }
  }
});
