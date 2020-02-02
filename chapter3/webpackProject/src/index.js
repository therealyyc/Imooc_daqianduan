import './style.css'
import './style.scss'

import happy from './happy.jpg'
import a from './a.js'
// const happy = require('./happy.jpg')
let crt = document.querySelector('#test')
let happyImg = new Image()

happyImg.src = happy
console.log('documem', document)
console.log('documem', document.body)
crt.appendChild(happyImg)
document.body.appendChild(crt)

if (process.env.NODE_ENV === 'development') {
  console.log('baseurl is localhost')
} else {
  console.log('baseurl is imooc.com')
}

a()


console.log('2233!!!')

