import { ifContained, isDeepSame, isWildSame, isWildCharSame, isPattern} from '../src/deep_same'

// console.log(insertIntoSparse([10, undefined, 20, 30, undefined, 40], [1,2,3]))
// console.log(isWildCharSame('a*x', 'aasadfasf')===true)

/**
 console.log(isWildCharSame('*', 'a3')===true)
 console.log(isWildCharSame('a*', 'a3')===true)
 console.log(isWildCharSame('a*', 'aa3')===true)
 console.log(isWildCharSame('a*', 'ba3')===false)
 console.log(isWildCharSame('a*', 'a')===true)
 console.log(isWildCharSame('a*bb', 'abb')===true)
 console.log(isWildCharSame('a*a', 'a')===false)
 console.log(isWildCharSame('a*a', 'aa')===true)
 console.log(isWildCharSame('a*a', 'baa')===false)
 console.log(isWildCharSame('a*a', 'aaaa')===true)
 console.log(isWildCharSame('a?a', 'aaaa')===false)
 console.log(isWildCharSame('a?a', 'aaa')===true)
 console.log(isWildCharSame('a?a?', 'aaaa')===true)
 // */

/**
 console.log(isPattern('a.**.x.**.j*j', 'a')===false)
 console.log(isPattern('a.**.x.**.j*j', 'a.jxj')===false)
 console.log(isPattern('a.**.x.**.j*j', 'a.b.x.c.jeej')===true)
 console.log(isWildSame('a.**.x.**.j*j', 'a')===true)
 console.log(isWildSame('a.**.x.**.j*j', 'a')===true)
 console.log(isWildSame('a.**.x.**.j*j', 'a')===true)
 console.log(isWildSame('a.**.x.**.j*j', 'a')===true)
 console.log(isWildSame('a.**.x.**.j*j', 'a')===true)
 console.log(isWildSame('a.**.x.**.j*j', 'a')===true)
 console.log(isWildSame('a.**.x.**.j*j', 'a')===true)
 // */

/**
 console.log(isWildSame('a', 'a.b')===true)
 console.log(isWildSame('**', 'a')===true)
 console.log(isWildSame('**', 'a.b')===true)
 console.log(isWildSame('**', 'a.b.c')===true)
 console.log(isWildSame('a.**', 'a')===true)
 console.log(isWildSame('a.**', 'a.b')===true)
 console.log(isWildSame('a.**', 'a.b.c')===true)
 console.log(isWildSame('a.**.b', 'a')===true)
 console.log(isWildSame('a.**.b', 'a.b')===true)
 console.log(isWildSame('a.**.b', 'b.a.b')===false)
 console.log(isWildSame('a.**.b', 'a.b.c')===true)
 console.log(isWildSame('a.**.b', 'a.c.b')===true)
 console.log(isWildSame('*', '')===true)
 console.log(isWildSame('*', 'a')===true)
 console.log(isWildSame('*', 'a.b')===true)
 console.log(isWildSame('*', 'a.b.c')===true)
 // console.log(isWildSame('a.*', 'a')===false)
 console.log(isWildSame('a.*', 'a')===true)
 console.log(isWildSame('a.*', 'a.')===true)
 console.log(isWildSame('a.*', 'b.')===false)
 console.log(isWildSame('a.*', 'a.b')===true)
 console.log(isWildSame('a.*', 'a.b.c')===true)
 console.log(isWildSame('a.*.z', 'a')===true)
 console.log(isWildSame('a.*.z', 'a.b')===true)
 console.log(isWildSame('a.*.z', 'a.z')===true)
 console.log(isWildSame('a.*.z', 'a.b.z')===true)
 // */

/**
 console.log(ifContained(['x.b.c.d.e'], 'd', 'x.b.c.d.e') === true)
 console.log(ifContained(['x.b.*.d.e'], 'd', 'x.b.c.d.e') === true)
 console.log(ifContained(['x.y', 'x.y.z'], 'x', '') === true)
 console.log(ifContained(['x.y', 'x.y.z'], 'y', 'x') === true)
 console.log(ifContained(['x.y', 'x.y.z'], 'z', 'x') === false)
 console.log(ifContained(['x.y', 'x.y.z'], 'z', 'x.y') === true)
 console.log(ifContained(['x.y', 'x.y.z.a'], 'a', 'x.y.z') === true)
 console.log(ifContained(['x.y', 'x.y.z.a.b'], 'd', 'x.y.z') === true)

 console.log(ifContained(['x.*.y', 'x.*.z'], 'z', '')===false)
 console.log(ifContained(['x.*.y', '*'], 'z', 'x')===true)
 console.log(ifContained(['x.*.y', 'x.*.z'], 'z', 'x.c') === true)
 console.log(ifContained(['x.*.y', 'x.*.z'], 'z', 'x.b.y') === true)
 console.log(ifContained(['x.*.y', 'x.*.z'], 'z', 'x.c.d') === false)
 console.log(ifContained(['x.*.y', 'x.*.z'], 'p', 'x.b') === false)
 console.log(ifContained(['x.*.y', 'x.*.z'], 'z', 'x')===true)
 console.log(ifContained(['x.*.y', 'x.*.z'], 'x', '')===true)
 // */

/**
console.log(isPattern('', '') === false)
console.log(isPattern('aa', '') === false)
console.log(isPattern('**', '') === true)
console.log(isPattern('a.**', 'a') === true)
console.log(isPattern('a.**', 'a.b') === true)
console.log(isPattern('a.**', 'a.b.c') === true)
console.log(isPattern('a.**.b', 'a.b') === true)
console.log(isPattern('a.**.b', 'a.b.c') === false)
console.log(isPattern('a.**.**.**.b', 'a.b') === true)
console.log(isPattern('a.**.**.**.b', 'a.c') === false)
console.log(isPattern('a.**.**.**.b', 'a.b.c') === false)
console.log(isPattern('a.**.b.**', 'a.b.c') === true)
console.log(isPattern('a.**.b.**.d', 'a.b.d') === true)
console.log(isPattern('a.**.b.**.d', 'a.b.c.d') === true)
console.log(isPattern('a.**.b.**.d', 'a.c.d') === false)
// */

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

