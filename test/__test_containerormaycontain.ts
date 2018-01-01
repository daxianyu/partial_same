
// /**
import {isContainedOrMayContain, isContained} from "../src/deep_same";

console.log(isContained(['x.**.a'], '0', 'x.b') === false)

console.log(isContainedOrMayContain(['x.b.c.d.e'], 'd', 'x.b.c.d.e') === true)
console.log(isContainedOrMayContain(['x.b.*.d.e'], 'd', 'x.b.c.d.e') === true)
console.log(isContainedOrMayContain(['x.y', 'x.y.z'], 'x', '') === true)
console.log(isContainedOrMayContain(['x.y', 'x.y.z'], 'y', 'x') === true)
console.log(isContainedOrMayContain(['x.y', 'x.y.z'], 'z', 'x') === false)
console.log(isContainedOrMayContain(['x.y', 'x.y.z'], 'z', 'x.y') === true)
console.log(isContainedOrMayContain(['x.y', 'x.y.z.a'], 'a', 'x.y.z') === true)
console.log(isContainedOrMayContain(['x.y', 'x.y.z.a.b'], 'd', 'x.y.z') === true)

console.log(isContainedOrMayContain(['x.*.y', 'x.*.z'], 'z', '')===false)
console.log(isContainedOrMayContain(['x.*.y', '*'], 'z', 'x')===true)
console.log(isContainedOrMayContain(['x.*.y', 'x.*.z'], 'z', 'x.c') === true)
console.log(isContainedOrMayContain(['x.*.y', 'x.*.z'], 'z', 'x.b.y') === true)
console.log(isContainedOrMayContain(['x.*.y', 'x.*.z'], 'z', 'x.c.d') === false)
console.log(isContainedOrMayContain(['x.*.y', 'x.*.z'], 'p', 'x.b') === false)
console.log(isContainedOrMayContain(['x.*.y', 'x.*.z'], 'z', 'x')===true)
console.log(isContainedOrMayContain(['x.*.y', 'x.*.z'], 'x', '')===true)
// */

