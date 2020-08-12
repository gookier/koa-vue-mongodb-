const Koa = require('koa');
const Router = require('koa-router');
//文件模块
const fs = require('fs');
//静态文件加载
const serve = require('koa-static');
//路径管理
const path = require('path');
//实例化koa
const app = new Koa();
const router = new Router();
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');

app.use(bodyParser());

app.use(controller());

// 1.主页静态网页 把静态页统一放到public中管理
const main = serve(path.join(__dirname) + '/www/');

//配置路由
app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 5000;
app.use(main)

app.listen(port, () => {
	console.log(`server started on ${port}`)
});
