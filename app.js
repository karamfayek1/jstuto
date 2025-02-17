
//common js older functions 
//const names = require('./name')
//const sayHi= require('./utils')
// ES js newer version when we work with react angular :a
//import sayHi  from './utils'
//sayHi(names.karam)



const _ =require('lodash')

const items=[1,2,[3,4],[5]]

const result = _.flattenDeep(items)
console.log(result)
console.log("hello ppl ")