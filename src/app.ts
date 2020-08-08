import RouterCore from "./domain/common/RouterCore"
import * as Koa from 'koa'
import * as logger from 'koa-logger'
import { routeConfig } from "./config"
import * as koaBody from 'koa-body'

const app = new Koa()

// middleware
app.use(logger())
app.use(koaBody())

// route definitions
routeConfig.forEach((r: RouterCore) => app.use(r.initRoute().routes()))

app.use((ctx: any) => {
    const body = ctx.request.body.events[0].message
    console.log(body)
    ctx.body = 'Hello, world'
})

// listen
app.listen(3000, () => console.log('Server running on :3000'))
