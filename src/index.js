import Router from './router/index.js';

const router = Router.instance();

router
  .addRoute(/^$/, 'validator')
  .addRoute(/^404\/?$/, 'error404')
  .setNotFoundPagePath('game')
  .listen();
