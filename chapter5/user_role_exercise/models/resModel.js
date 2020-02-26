class ResModel {
  constructor(code, message, data) {
    // if (typeof code === 'string') {
    //   this.message = data
    //   data = null
    //   message = null
    // }
    if (code) {
      this.code = code
    }

    if (message) {
      this.message = message
    }

    if (data) {
      this.data = data
    }
  }
}





module.exports = {
  ResModel
}