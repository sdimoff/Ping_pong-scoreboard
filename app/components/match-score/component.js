import Ember from 'ember';
import Component from '@ember/component';

const { inject } = Ember;

export default Component.extend({
  matchScores: inject.service(),

  actions: {
    deleteMatch(component) {
      const matches = this.get('matchScores.matches');
      const matchToBeDeleted = matches.filter(match => match.id === component.id)[0];

      this.get('matchScores.matches').removeObject(matchToBeDeleted);
    }
  }
});
