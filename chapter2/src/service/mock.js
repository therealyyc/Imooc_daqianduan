import Mock, { Random } from 'mockjs'

export function getData() {
  Mock.Random.extend({
    myTitle: Random.title(1, 7),
    myDate: Random.datetime('yyyy-MM-dd HH:mm:ss'),
    myImg: Random.image('200x100')
  })
  const regex = /\/api\.*/
  const data = Mock.mock(regex, (req) => {
    let ret = Object.fromEntries(req.url.split("?")[1].split('&').map(v => v.split('=')))
    console.log('ret', ret)
    let { pageNumber, pageSize } = ret
    let number = 10
    let size = 10
    let key = `data|${pageSize}`
    return Mock.mock({
      status: '0',
      [key]: [{
        'tid|+1': 1,
        'title': '@mytitle',
        'catalog': 'index',
        'fav|1000-2000': 1000,
        'created': '@myDate',
        'isEnd|0-1': 0,
        'answer|0-100': 0,
        'user': {
          avatar: '@myImg',
          name: '@cname',
          isVip: "1",
          'level|0-10': 0
        }
      }]
    })
  })
  return data || []
}