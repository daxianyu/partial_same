// /**
import {isMatchWordPattern} from "../src/deep_same";

console.log(isMatchWordPattern('a*x', 'aasadfasf')===false)
console.log(isMatchWordPattern('*', 'a3')===true)
console.log(isMatchWordPattern('a*', 'a3')===true)
console.log(isMatchWordPattern('a*', 'aa3')===true)
console.log(isMatchWordPattern('a*', 'ba3')===false)
console.log(isMatchWordPattern('a*', 'a')===true)
console.log(isMatchWordPattern('a*bb', 'abb')===true)
console.log(isMatchWordPattern('a*a', 'a')===false)
console.log(isMatchWordPattern('a*a', 'aa')===true)
console.log(isMatchWordPattern('a*a', 'baa')===false)
console.log(isMatchWordPattern('a*a', 'aaaa')===true)
console.log(isMatchWordPattern('a?a', 'aaaa')===false)
console.log(isMatchWordPattern('a?a', 'aaa')===true)
console.log(isMatchWordPattern('a?a?', 'aaaa')===true)
// */