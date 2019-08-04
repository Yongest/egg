'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // async index() {
  //   const { ctx } = this;
  //   console.log(ctx.csrf)
  //   ctx.body = 'hi, egg';
  // }

  
  async  create() {
    const { ctx } = this;
   
    
    const requestBody = ctx.request.body;
    console.log('body',requestBody);

    const postsInstance = new ctx.model.Posts({
      title:requestBody.title,
      content:requestBody.content
    })
    await postsInstance.save()
  }
}

module.exports = HomeController;
