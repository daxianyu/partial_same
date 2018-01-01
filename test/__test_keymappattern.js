"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var deep_same_1 = require("../src/deep_same");
console.log(deep_same_1.isMatchKeymapPattern('a.**.x.**.j*j', 'a') === true);
console.log(deep_same_1.isMatchKeymapPattern('a.**.x.**.j*j', 'a') === true);
console.log(deep_same_1.isMatchKeymapPattern('a.**.x.**.j*j', 'a') === true);
console.log(deep_same_1.isMatchKeymapPattern('a.**.x.**.j*j', 'a') === true);
console.log(deep_same_1.isMatchKeymapPattern('a.**.x.**.j*j', 'a') === true);
console.log(deep_same_1.isMatchKeymapPattern('a.**.x.**.j*j', 'a') === true);
console.log(deep_same_1.isMatchKeymapPattern('a.**.x.**.j*j', 'a') === true);
console.log(deep_same_1.isMatchKeymapPattern('a', 'a.b') === true);
console.log(deep_same_1.isMatchKeymapPattern('**', 'a') === true);
console.log(deep_same_1.isMatchKeymapPattern('**', 'a.b') === true);
console.log(deep_same_1.isMatchKeymapPattern('**', 'a.b.c') === true);
console.log(deep_same_1.isMatchKeymapPattern('a.**', 'a') === true);
console.log(deep_same_1.isMatchKeymapPattern('a.**', 'a.b') === true);
console.log(deep_same_1.isMatchKeymapPattern('a.**', 'a.b.c') === true);
console.log(deep_same_1.isMatchKeymapPattern('a.**.b', 'a') === true);
console.log(deep_same_1.isMatchKeymapPattern('a.**.b', 'a.b') === true);
console.log(deep_same_1.isMatchKeymapPattern('a.**.b', 'b.a.b') === false);
console.log(deep_same_1.isMatchKeymapPattern('a.**.b', 'a.b.c') === true);
console.log(deep_same_1.isMatchKeymapPattern('a.**.b', 'a.c.b') === true);
console.log(deep_same_1.isMatchKeymapPattern('*', '') === true);
console.log(deep_same_1.isMatchKeymapPattern('*', 'a') === true);
console.log(deep_same_1.isMatchKeymapPattern('*', 'a.b') === true);
console.log(deep_same_1.isMatchKeymapPattern('*', 'a.b.c') === true);
console.log(deep_same_1.isMatchKeymapPattern('a.*', 'a') === true);
console.log(deep_same_1.isMatchKeymapPattern('a.*', 'a.') === true);
console.log(deep_same_1.isMatchKeymapPattern('a.*', 'b.') === false);
console.log(deep_same_1.isMatchKeymapPattern('a.*', 'a.b') === true);
console.log(deep_same_1.isMatchKeymapPattern('a.*', 'a.b.c') === true);
console.log(deep_same_1.isMatchKeymapPattern('a.*.z', 'a') === true);
console.log(deep_same_1.isMatchKeymapPattern('a.*.z', 'a.b') === true);
console.log(deep_same_1.isMatchKeymapPattern('a.*.z', 'a.z') === true);
console.log(deep_same_1.isMatchKeymapPattern('a.*.z', 'a.b.z') === true);
//# sourceMappingURL=__test_keymappattern.js.map