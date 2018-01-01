# partial_same
deeply compare with include and exclude keymap 

```js
import { isPartialSame } from 'partial_same'

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
            t: 2, r: 2, b: 3, l: 4
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
/**
* @param object1, object2, include keymaps, exclude keymaps
* */
// isPartialSame(object1, object2, )

isPartialSame(o1, o2)
isPartialSame(o1, o2, ['x', 'y'], ['x.**.t'])
isPartialSame(o1, o2, ['x.d.a'], ['x.**.t'])
isPartialSame(o1, o2, ['x.**.a'], ['x.**.t'])

```