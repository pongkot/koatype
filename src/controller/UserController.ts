import RouterCore from "../common/RouterCore"
import Router = require("@koa/router")
import ServiceProvider from "../provider/ServiceProvider"
import IUserService from "../service/IUserService"
import { IUser } from "../service/UserService"

const serviceProvider = ServiceProvider.getInstance()
const userService: IUserService = serviceProvider.userService()
const userRoute = new Router({
    prefix: '/user'
})

export default class UserController extends RouterCore {
    private static instance: UserController = new UserController()

    public static getInstance(): UserController {
        return this.instance
    }

    public initRoute(): Router {
        return userRoute
            .get('/', this.listUsers)
            .get('/:id', this.getUser)
    }

    private listUsers(ctx: any): void {
        userService.listUser().subscribe((e: IUser[]) => ctx.body = e)
    }

    private getUser(ctx: any): void {
        const id = ctx.params.id
        userService.getUser(id).subscribe((e: IUser[]) => ctx.body = e)
    }
}
