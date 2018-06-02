import Service from '@ember/service';

export default Service.extend({
  players: '',
  matches: '',
  init() {
    this._super(arguments);
    this.set('players', [
      {name: 'Kerge Kotzher'},
      {name: 'Oronzo Gallo'},
      {name: 'Emily M. Mills'},
      {name: 'Leo Matić'},
      {name: 'Nicole C. Lewis'},
      {name: 'Feng Yang'},
    ]);
    this.set('matches', [
      {
        id: 1,
        playerOneName: 'Kerge Kotzher',
        playerOnePic: 'https://www.drodd.com/images16/smiley-emoji09.jpg',
        playerTwoName: 'Emily M. Mills',
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
        playerOnePic: 'https://www.drodd.com/images16/smiley-emoji09.jpg',
        playerTwoName: 'Leo Matić',
        playerTwoPic: 'https://www.drodd.com/images16/smiley-emoji09.jpg',
        get latestScore() {
          return this.previousScores[this.previousScores.length - 1];
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
        playerOnePic: 'https://www.drodd.com/images16/smiley-emoji09.jpg',
        playerTwoName: 'Feng Yang',
        playerTwoPic: 'https://www.drodd.com/images16/smiley-emoji09.jpg',
        get latestScore() {
          return this.previousScores[this.previousScores.length - 1];
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
    ])
  }
});
