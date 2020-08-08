import UserController from "./controller/UserController"
import RouterCore from "./domain/common/RouterCore"

export const routeConfig: RouterCore[] = [
    UserController.getInstance(),
]
