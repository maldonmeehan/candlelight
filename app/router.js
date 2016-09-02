import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('contact');
  this.route('events');
  this.route('menu-day');
  this.route('menu-night');
  this.route('late-night-menu');
  this.route('menus');
});

export default Router;
