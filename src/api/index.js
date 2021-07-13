const Rounter = require('koa-router');
const posts = require('./posts');

const api = new Rounter();

api.use('/posts', posts.routes());

module.exports = api;
