import Ember from 'ember';
import Component from '@ember/component';

const { inject } = Ember;

export default Component.extend({
  classNames:['container'],
  // _latestScore() {
  //   const eachScore = this.previousScores[this.previousScores.length - 1].split('-');
  //
  //   return `${eachScore[0]} - ${eachScore[1]}`
  // },
  // _latestWinner() {
  //   const eachScore = this.previousScores[this.previousScores.length - 1].split('-');
  //
  //   return eachScore[0] > eachScore[1];
  // },
  matches: [
    {
      id: 1,
      playerOneName: 'Kerge Kotzher',
      playerOnePic: '',
      playerTwoName: 'Emily M. Mills',
      playerTwoPic: '',
      get latestScore() {
        const eachScore = this.previousScores[this.previousScores.length - 1].split('-');

        return `${eachScore[0]} - ${eachScore[1]}`
      },
      get firstWon() {
        const eachScore = this.previousScores[this.previousScores.length - 1].split('-');

        return eachScore[0] > eachScore[1];
      },
      previousScores: [
        '11-7',
        '11-9',
        '11-3',
        '9-11',
        '7-11',
        '11-8',
        '4-2',
      ]
    },
    {
      id: 2,
      playerOneName: 'Oronzo Gallo',
      playerOnePic: '',
      playerTwoName: 'Leo Matić',
      playerTwoPic: '',
      get latestScore() {
        const eachScore = this.previousScores[this.previousScores.length - 1].split('-');

        return `${eachScore[0]} - ${eachScore[1]}`
      },
      get firstWon() {
        const eachScore = this.previousScores[this.previousScores.length - 1].split('-');

        return eachScore[0] > eachScore[1];
      },
      previousScores: [
        '3-11',
        '7-11',
        '0-6',
        '0-3'
      ]
    },
    {
      id: 3,
      playerOneName: 'Nicole C. Lewis',
      playerOnePic: '',
      playerTwoName: 'Feng Yang',
      playerTwoPic: '',
      get latestScore() {
        const eachScore = this.previousScores[this.previousScores.length - 1].split('-');

        return `${eachScore[0]} - ${eachScore[1]}`
      },
      get firstWon() {
        const eachScore = this.previousScores[this.previousScores.length - 1].split('-');

        return eachScore[0] > eachScore[1];
      },
      previousScores: [
        '6-11',
        '14-12',
        '4-11',
        '1-2'
      ]
    }
  ],
  actions: {
    deleteMatch(component, allMatches) {
      const compToBeDeleted = allMatches.filter(match => match.id === component.id);

      allMatches.splice(allMatches.indexOf(compToBeDeleted), 1);
    }
  }
});
