const router = require('koa-router')()
const {
  ResModel,
} = require('../models/resModel.js')
router.prefix('/api')

router.get('/string', async (ctx, next) => {
  console.log('bbbb')
  ctx.body = 'koa2 string'
})

router.post('/user', async (ctx, next) => {
  const { name, email } = ctx.request.body
  if (!name || !email) {
    ctx.body = JSON.stringify(new ResModel(404, 'name与email不能为空'), null, 2)
    return;
  }

  if (ctx.request.header.role !== 'admin') {
    ctx.body = JSON.stringify(new ResModel(401, 'unauthorized post'), null, 2)
    return;
  }
  let resdata = { ...ctx.request.body }
  ctx.body = JSON.stringify(new ResModel(200, '上传成功', resdata), null, 2)

})

router.get('/a', async (ctx, next) => {
  console.log('aaaa')
  let str = "hello aaa"
  ctx.body = JSON.stringify(str)
  return;
})


module.exports = router