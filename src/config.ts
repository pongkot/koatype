import UserController from "./controller/UserController"
import RouterCore from "./common/RouterCore"

const routeConfig: RouterCore[] = [
    UserController.getInstance(),
]

export {
    routeConfig
}