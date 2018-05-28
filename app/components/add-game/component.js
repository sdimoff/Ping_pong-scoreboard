import Ember from 'ember';
import Component from '@ember/component';
import EmberObject from '@ember/object';
const { inject } = Ember;

export default Component.extend({
  playerOne:'',

  playerTwo:'',

  matchScores: inject.service(),

  resetPlayers(players, prop) {
    players.forEach(function (e) {
      e[prop].set('show', true);
    });
  },

  actions: {
    pickPlayer(homePlayer, event) {
      const players = this.get('matchScores.players');
      const playerToRemove = players.filter(player => player.name === event.target.value)[0];

      if (event.target.name === 'playerOne') {
        this.set('playerOne', event.target.value);
      } else {
        this.set('playerTwo', event.target.value);
      }

      if (homePlayer) {
        this.resetPlayers(players, 'guest');
        playerToRemove.guest.set('show', false);
      } else {
        this.resetPlayers(players, 'home');
        playerToRemove.home.set('show', false);
      }
    },

    addGame() {
      const matches = this.get('matchScores.matches');

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
    }
  }
});
