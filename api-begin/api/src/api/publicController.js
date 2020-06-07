
import svgCaptcha from 'svg-captcha'
class publicController {
  constructor() { }
  async getCaptcha(ctx) {
    const captcha = svgCaptcha.create({});
    ctx.body = {
      data: {
        dataSvg: captcha.data,
        text: captcha.text
      },
      code: 200
    }
  }
}

export default new publicController()
