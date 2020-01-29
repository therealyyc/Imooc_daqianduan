import './style.css'
import './style.scss'

import happy from './happy.jpg'
// const happy = require('./happy.jpg')
let crt = document.querySelector('#test')
let happyImg = new Image()

happyImg.src = happy
console.log('documem', document)
console.log('documem', document.body)
crt.appendChild(happyImg)
document.body.appendChild(crt)

