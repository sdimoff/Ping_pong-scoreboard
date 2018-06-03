import Ember from 'ember';
import Component from '@ember/component';
import EmberObject from '@ember/object';
const { inject } = Ember;

export default Component.extend({
  matchedOne: null,

  matchedTwo: null,

  playerOne:'',

  playerTwo:'',

  matchScores: inject.service(),

  actions: {
    searchPlayer() {
      const players = this.get('matchScores.players');
      const matched = players.filter(player => player.name.includes(event.target.value));

      if (event.target.value === '') {
        this.set('matched', null);
      } else {
        if (event.target.name === 'playerOne') {
          this.set('matchedOne', matched);
        } else {
          this.set('matchedTwo', matched);
        }
      }
    },

    setPlayer(playerName) {
      if (event.target.getAttribute('name') === 'playerOne') {
        this.set('playerOne', playerName);
        this.set('value', playerName);
        this.set('matchedOne', null);
      } else {
        this.set('playerTwo', playerName);
        event.target.parentElement.previousElementSibling.value=playerName;
        this.set('matchedTwo', null);
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
