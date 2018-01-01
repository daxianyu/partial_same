"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var deep_same_1 = require("../src/deep_same");
console.log(deep_same_1.isMatchWordPattern('a*x', 'aasadfasf') === true);
console.log(deep_same_1.isMatchWordPattern('*', 'a3') === true);
console.log(deep_same_1.isMatchWordPattern('a*', 'a3') === true);
console.log(deep_same_1.isMatchWordPattern('a*', 'aa3') === true);
console.log(deep_same_1.isMatchWordPattern('a*', 'ba3') === false);
console.log(deep_same_1.isMatchWordPattern('a*', 'a') === true);
console.log(deep_same_1.isMatchWordPattern('a*bb', 'abb') === true);
console.log(deep_same_1.isMatchWordPattern('a*a', 'a') === false);
console.log(deep_same_1.isMatchWordPattern('a*a', 'aa') === true);
console.log(deep_same_1.isMatchWordPattern('a*a', 'baa') === false);
console.log(deep_same_1.isMatchWordPattern('a*a', 'aaaa') === true);
console.log(deep_same_1.isMatchWordPattern('a?a', 'aaaa') === false);
console.log(deep_same_1.isMatchWordPattern('a?a', 'aaa') === true);
console.log(deep_same_1.isMatchWordPattern('a?a?', 'aaaa') === true);
//# sourceMappingURL=__test_wordpattern.js.map