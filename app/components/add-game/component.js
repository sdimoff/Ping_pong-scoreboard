import Ember from 'ember';
import Component from '@ember/component';
import EmberObject from '@ember/object';
const { inject } = Ember;

export default Component.extend({
  matched: null,

  playerOne:'',

  playerTwo:'',

  matchScores: inject.service(),

  actions: {
    searchPlayer() {
      const players = this.get('matchScores.players');
      const matched = players.filter(player => player.name.includes(this.value))

      this.set('matched', matched);
    },

    setPlayer(name) {
      if (event.target.name === 'playerOne') {
        this.set('playerOne', name);
      } else {
        this.set('playerTwo', name);
      }
    },

    addGame() {
      debugger;
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
