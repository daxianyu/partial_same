import { isDeepSame } from '../src/deep_same'

let o1 = {
    x: {
        a: {
            t: 1, r: 2, b: 3, l: 4
        },
        b: [4,3,2,1],
        c: false,
        d: {
            a: {
                t: 2, r: 2, b: 3, l: 4
            },
        }
    },
    y: [1,2,3,4],
    z: 2
}, o2 = {
    x: {
        a: {
            t: 1, r: 2, b: 3, l: 4
        },
        b: [1,2,3,4],
        c: false,
        d: {
            a: {
                t: 1, r: 2, b: 3, l: 4
            },
        }
    },
    y: [1,2,3,4],
    z: 4
}

console.log(isDeepSame(o1.z, o2.z, [], [])===false)
console.log(isDeepSame(o1.y, o2.y, [], [])===true)
console.log(isDeepSame(o1, o2, ['x.**'], ['x.d'])===false)
console.log(isDeepSame(o1, o2, ['x.b'], ['x.b.*'])===true)
console.log(isDeepSame(o1, o2, ['x.b'], [])===false)
console.log(isDeepSame(o1, o2, ['x.b.*'], ['x.b.0'])===false)
console.log(isDeepSame(o1, o2, ['x.d.**'], ['x.d'])===true)
console.log(isDeepSame(o1, o2, ['x.d.**'], ['x.**.r'])===false)
console.log(isDeepSame(o1, o2, ['x.d.**'], ['x.*.*.r'])===false)
console.log(isDeepSame(o1, o2, ['*'], ['x', 'z'])===true)
console.log(isDeepSame(o1, o2, ['x'], ['x.b'])===false)
console.log(isDeepSame(o1, o2, ['x'], ['x.b', 'x.d'])===true)
console.log(isDeepSame(o1, o2, ['x'], ['x.b', 'x.d.*.t'])===true)
console.log(isDeepSame(o1, o2, ['x'], ['x.b', 'x.d.a.t'])===true)
console.log(isDeepSame(o1, o2, ['x.*'], ['x.b'])===false)
console.log(isDeepSame(o1, o2, ['x.*'], ['x.b', 'x.d'])===true)
console.log(isDeepSame(o1, o2, ['x.*'], ['x.b', 'x.d.*.t'])===true)
console.log(isDeepSame(o1, o2, ['x.*'], ['x.b', 'x.d.a.t'])===true)
console.log(isDeepSame(o1, o2, ['x.d'], ['x.**.t'])===true)
console.log(isDeepSame(o1, o2, ['y'], [])===true)
console.log(isDeepSame(o1, o2, ['*'], ['x', 'z'])===true)

