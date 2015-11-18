Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name:     'home',
  template: 'home',
  subscriptions: function() {
    return [
      Meteor.subscribe('esemeny'),
      Meteor.subscribe('verseny'),
    ];
  }
});

Router.route('/adminEsemeny', {
  name:     'adminEsemeny',
  template: 'adminEsemeny',
  subscriptions: function() {
    return [
      Meteor.subscribe('esemeny')
    ];
  }
});

Router.route('/adminVerseny', {
  name:     'adminVerseny',
  template: 'adminVerseny',
  subscriptions: function() {
    return [
      Meteor.subscribe('verseny')
    ];
  }
});

Router.route('/adminFogadas', {
  name:     'adminFogadas',
  template: 'adminFogadas',
  subscriptions: function() {
    return [
      Meteor.subscribe('fogadas')
    ];
  }
});

Router.route('/adminUser', {
  name:     'adminUser',
  template: 'adminUser',
  subscriptions: function() {
    return [
      Meteor.subscribe('users')
    ];
  }
});

Router.route('/kmkEvents', {
  name:     'kmkEvents',
  template: 'kmkEvents',
  subscriptions: function() {
    return [
      Meteor.subscribe('esemeny')
    ];
  }
});

Router.route('/bet', {
  name:     'bet',
  template: 'bet',
  subscriptions: function() {
    return [
      Meteor.subscribe('fogadas')
    ];
  }
});

Router.route('/leaderboard', {
  name:     'leaderboard',
  template: 'leaderboard',
  subscriptions: function() {
    return [
      Meteor.subscribe('leaderboard')
    ];
  }
});
