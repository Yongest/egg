'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async hello() {
    const { ctx } = this;
    await ctx.render('hello.nj');
  }
}

module.exports = HomeController;
