/**
 * 匹配'?'和'*'
 * 分别表示一个字符，0个及以上字符
 * */
export function isMatchWordPattern(reg:string, toCp: string):boolean{
    let regCursor = 0, cpCursor = 0
    if(reg===toCp) return true
    if(reg === undefined || toCp === undefined) return false
    if(reg==='' && toCp==='') return true
    while(regCursor < reg.length) {
        // 对匹配模板进行遍历，需要满足模板
        if(reg[regCursor] === '?'){
            regCursor ++; cpCursor ++
            if(regCursor===reg.length && cpCursor === toCp.length) return true
        }
        if(reg[regCursor] === '*' && cpCursor < toCp.length) {              // as* vs. asd
            while(toCp[cpCursor]!==reg[regCursor + 1] && cpCursor < toCp.length) {
                cpCursor++
            }
            if(isMatchWordPattern(reg.substr(regCursor+1), toCp.substr(cpCursor))){
                return true
            } else {
                cpCursor ++
            }
        } else if(reg[regCursor] === '*' && regCursor === reg.length - 1){  // as* vs. as
            return true
        } else if(reg[regCursor]===toCp[cpCursor]){
            regCursor++;cpCursor++
            if(regCursor ===reg.length && cpCursor===toCp.length) return true
        } else {
            return false
        }
    }
    return false
}

/**
 * a.*.b = a.b, a.b.b, a.c.b; != a.b.c, a.c.c.b
 * a.**.b = a.b.b a.
 * */
export function isMatchKeymapPattern(reg:string, toCp:string, isContained?:true):boolean {
    if(reg==='**') return true
    const regList = reg.split('.')
    const cpStrList = toCp.split('.')
    let regCursor = 0, cpCursor = 0
    while(cpCursor<cpStrList.length && regCursor<regList.length) {
        if(regList[regCursor].indexOf('*')>-1){
            if(regList[regCursor]==='**') {
                cpCursor++;
                // 最后一个字符匹配到的通配符恰好也是regList的最后一项，说明满足了
                if(cpCursor === cpStrList.length && regCursor===regList.length - 1) return true
            } else if(isMatchWordPattern(regList[regCursor], cpStrList[cpCursor])){
                cpCursor++;regCursor++
            } else {
                return false
            }
            // 如果全是普通字符串的比较
        } else if(cpStrList[cpCursor]===regList[regCursor]) {
            cpCursor++;regCursor++
        } else {
            return false
        }
    }
    if(isContained) {
        // 在reg遍历结束，但cpStr未遍历尽就结束，则说明其是更深的层级
        return cpCursor <= cpStrList.length && regCursor >= regList.length
    }
    return (cpCursor >= cpStrList.length || regCursor >= regList.length)
}

export function isContained(arr: string[], str:string, context: string,):boolean{
    return isContainedOrMayContain(arr, str, context, true)
}
/**
 * WildCards only support '*' and 'ppp.*.xxx'
 * */
export function isContainedOrMayContain(arr: string[], str:string, context: string, isContain?:true):boolean{
    const nextContext = (context ? context + '.': '') + str
    for(let dirs of arr) {
        if(dirs.indexOf('*')> -1 ) {
            if(dirs === '*') return true
            if(dirs.length && dirs[0]==='*') {
                if(dirs.substr(2) === str) return true
            }
            if(isMatchKeymapPattern(dirs, nextContext, isContain)){
                return true
            }
        } else {
            // 全匹配
            if(dirs!=='' && dirs === nextContext) return true
            // context为dirs的子空间
            if(context.indexOf(dirs)===0 || nextContext.indexOf(dirs)===0) return true
            // 头匹配 1.剩余完全匹配，2.剩余到最近的'.'之间完全匹配
            if(dirs.indexOf(context)===0 && dirs[nextContext.length] ==='.') {
                const left = dirs.substr(context.length)
                if(left === str) return true
                if (left.indexOf(str)===0 && left[str.length] ==='.') return true
            }
        }
    }
    return false
}

function isValidReg (reg:string):boolean{
    if(reg===undefined) {
        return true
    }
    if(reg.indexOf('**') > -1 && reg !== '**') {
        throw Error('** should not with other chars')
    }
    return true
}
/**
 * a.**a is not allowed
 * a.**.b
 * a.*a.b
 *
 * */
function isPatternMatchedImpl(regList: string[], cpList: string[]):boolean{
    let regCursor = 0, cpCursor = 0
    if(regList.length === 0 && cpList.length ===0) return true

    while(regCursor < regList.length) {
        isValidReg(regList[regCursor])
        if(regList[regCursor] === '**' && cpCursor <= cpList.length) {
            // 排除了 a**的情况，将多个 '**' 合并
            while(isValidReg(regList[regCursor + 1]) && regList[regCursor + 1] ==='**') regCursor ++
            while(cpCursor < cpList.length && !isMatchWordPattern(regList[regCursor + 1], cpList[cpCursor])) {
                cpCursor ++
            }
            if(!regList[regCursor + 1]) return true // 以'**'结尾则匹配成功
            if(cpCursor === cpList.length) return false // '**'后面还有，但是cpList已经没有了
            if(isPatternMatchedImpl(regList.slice(regCursor + 1), cpList.slice(cpCursor))) {
                return true
            } else {
                cpCursor ++
            }
        }
        if(regList[regCursor] !== '**') { // 非全通配情况
            if(isMatchWordPattern(regList[regCursor], cpList[cpCursor])){
                regCursor ++; cpCursor ++
                if(regCursor === regList.length) {
                    return cpCursor === cpList.length
                }
            } else {
                return false
            }
        }
    }
    return false
}

/**
 * aaa.**.bb.**.cc vs. aaa.bb.dd.cc
 * */
export function isPatternMatched(reg: string, toCp: string):boolean{
    if(reg==='**') return true
    if(reg==='' && toCp ==='') return false
    const regList = reg.split('.')
    const cpStrList = toCp.split('.')

    return isPatternMatchedImpl(regList, cpStrList)
}

export function ifSomeMatch(regList:string[], key: string, context: string):boolean {
    for(let item of regList) {
        if(isPatternMatched(item, (context?context + '.':'') + key)) {
            return true
        }
    }
    return false
}

export function isPartialSame(o1: any, o2: any, include?:string[], exclude?:string[], context?:string):boolean{
    if(o1 === o2) {
        return true
    }
    if(typeof o1 ==='object') {
        // 判断是否已经到了最后节点
        const type1 = Object.prototype.toString.call(o1)
        const type2 = Object.prototype.toString.call(o2)
        if(type1 !== type2) return false
        if(type1 === '[object Array]'){
            if(o1.length !== o2.length) return false
            for(let i=0; i<o1.length; i++) {
                if(include && include.length && !isContainedOrMayContain(include, i.toString(), context||'')) continue
                // 直接过滤掉了超过临界的情况
                if(exclude && exclude.length && ifSomeMatch(exclude, i.toString(), context||'')) continue

                if(!isPartialSame(o1[i], o2[i], include, exclude, (context?context+'.':'') + i)){
                    return false
                }
            }
        } else {
            const allKeysRaw = Object.keys(o1).concat(Object.keys(o2))
            const keys = allKeysRaw.filter((key, i)=>allKeysRaw.indexOf(key)===i)
            // 把所有的key混合后遍历，这样就能避免缺了不同的key但是数量还是相等的bug
            for(let key of keys) {
                if(include && include.length && !isContainedOrMayContain(include, key, context||'')) continue
                // 如果这个key不被包含，则跳过比较
                if(exclude && exclude.length && ifSomeMatch(exclude, key, context||'')) continue
                if(o1.hasOwnProperty(key)){
                    if(!isPartialSame(o1[key], o2[key], include, exclude, (context?context+'.':'') + key)){
                        // 如果是匹配全等，那调用该处的上级递归就true了
                        return false
                    }
                }
            }
        }
        return true
    } else {
        // 已经是基础类型的值，没有再下层递归了，此处如果没有match到，则说明没有被include，估返回true
        if(include && include.length){
            if(isContained(include, context||'', '')){
                return o1 === o2
            } else {
                return true
            }
        }
    }
    return false
}