"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var deep_same_1 = require("../src/deep_same");
console.log(deep_same_1.isContained(['x.**.a'], '0', 'x.b') === false);
console.log(deep_same_1.isContainedOrMayContain(['x.b.c.d.e'], 'd', 'x.b.c.d.e') === true);
console.log(deep_same_1.isContainedOrMayContain(['x.b.*.d.e'], 'd', 'x.b.c.d.e') === true);
console.log(deep_same_1.isContainedOrMayContain(['x.y', 'x.y.z'], 'x', '') === true);
console.log(deep_same_1.isContainedOrMayContain(['x.y', 'x.y.z'], 'y', 'x') === true);
console.log(deep_same_1.isContainedOrMayContain(['x.y', 'x.y.z'], 'z', 'x') === false);
console.log(deep_same_1.isContainedOrMayContain(['x.y', 'x.y.z'], 'z', 'x.y') === true);
console.log(deep_same_1.isContainedOrMayContain(['x.y', 'x.y.z.a'], 'a', 'x.y.z') === true);
console.log(deep_same_1.isContainedOrMayContain(['x.y', 'x.y.z.a.b'], 'd', 'x.y.z') === true);
console.log(deep_same_1.isContainedOrMayContain(['x.*.y', 'x.*.z'], 'z', '') === false);
console.log(deep_same_1.isContainedOrMayContain(['x.*.y', '*'], 'z', 'x') === true);
console.log(deep_same_1.isContainedOrMayContain(['x.*.y', 'x.*.z'], 'z', 'x.c') === true);
console.log(deep_same_1.isContainedOrMayContain(['x.*.y', 'x.*.z'], 'z', 'x.b.y') === true);
console.log(deep_same_1.isContainedOrMayContain(['x.*.y', 'x.*.z'], 'z', 'x.c.d') === false);
console.log(deep_same_1.isContainedOrMayContain(['x.*.y', 'x.*.z'], 'p', 'x.b') === false);
console.log(deep_same_1.isContainedOrMayContain(['x.*.y', 'x.*.z'], 'z', 'x') === true);
console.log(deep_same_1.isContainedOrMayContain(['x.*.y', 'x.*.z'], 'x', '') === true);
//# sourceMappingURL=__test_containerormaycontain.js.map