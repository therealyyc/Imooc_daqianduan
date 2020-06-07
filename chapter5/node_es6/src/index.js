// const koa = require('koa')
import koa from 'koa'
import koaBody from 'koa-body'
import compose from 'koa-compose'
import router from './routes/routes'


const app = new koa()
const middleware = compose([
  koaBody,
  //statics,
  cors(),
  jsonutil({ pretty: false, param: 'pretty' }),
  helmet()
])
app.use(middleware)


// const router = require('./routes/routes')


app.use(router())

app.listen(3000)