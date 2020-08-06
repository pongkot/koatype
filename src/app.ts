import RouterCore from "./common/RouterCore"
import * as Koa from 'koa'
import * as logger from 'koa-logger'
import { routeConfig } from "./config"

const app = new Koa()

// middleware
app.use(logger())

// route definitions
routeConfig.forEach((r: RouterCore) => app.use(r.initRoute().routes()))

app.use((ctx: any) => ctx.body = 'Hello, world')

// listen
app.listen(3000, () => console.log('Server running on :3000'))
