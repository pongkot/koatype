import Router = require("@koa/router");

export default abstract class RouterCore {
    abstract initRoute(): Router
}
