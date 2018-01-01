// /**
import {isPatternMatched} from "../src/deep_same";

console.log(isPatternMatched('a.**.x.**.j*j', 'a')===false)
console.log(isPatternMatched('a.**.x.**.j*j', 'a.jxj')===false)
console.log(isPatternMatched('a.**.x.**.j*j', 'a.b.x.c.jeej')===true)
console.log(isPatternMatched('', '') === false)
console.log(isPatternMatched('aa', '') === false)
console.log(isPatternMatched('**', '') === true)
console.log(isPatternMatched('a.**', 'a') === true)
console.log(isPatternMatched('a.**', 'a.b') === true)
console.log(isPatternMatched('a.**', 'a.b.c') === true)
console.log(isPatternMatched('a.**.b', 'a.b') === true)
console.log(isPatternMatched('a.**.b', 'a.b.c') === false)
console.log(isPatternMatched('a.**.**.**.b', 'a.b') === true)
console.log(isPatternMatched('a.**.**.**.b', 'a.c') === false)
console.log(isPatternMatched('a.**.**.**.b', 'a.b.c') === false)
console.log(isPatternMatched('a.**.b.**', 'a.b.c') === true)
console.log(isPatternMatched('a.**.b.**.d', 'a.b.d') === true)
console.log(isPatternMatched('a.**.b.**.d', 'a.b.c.d') === true)
console.log(isPatternMatched('a.**.b.**.d', 'a.c.d') === false)
// */