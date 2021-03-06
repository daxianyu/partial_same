"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isMatchWordPattern(reg, toCp) {
    var regCursor = 0, cpCursor = 0;
    if (reg === toCp)
        return true;
    if (reg === undefined || toCp === undefined)
        return false;
    if (reg === '' && toCp === '')
        return true;
    while (regCursor < reg.length) {
        if (reg[regCursor] === '?') {
            regCursor++;
            cpCursor++;
            if (regCursor === reg.length && cpCursor === toCp.length)
                return true;
        }
        if (reg[regCursor] === '*' && cpCursor < toCp.length) {
            while (toCp[cpCursor] !== reg[regCursor + 1] && cpCursor < toCp.length) {
                cpCursor++;
            }
            if (isMatchWordPattern(reg.substr(regCursor + 1), toCp.substr(cpCursor))) {
                return true;
            }
            else {
                cpCursor++;
            }
        }
        else if (reg[regCursor] === '*' && regCursor === reg.length - 1) {
            return true;
        }
        else if (reg[regCursor] === toCp[cpCursor]) {
            regCursor++;
            cpCursor++;
            if (regCursor === reg.length && cpCursor === toCp.length)
                return true;
        }
        else {
            return false;
        }
    }
    return false;
}
exports.isMatchWordPattern = isMatchWordPattern;
function isMatchKeymapPattern(reg, toCp, isContained) {
    if (reg === '**')
        return true;
    var regList = reg.split('.');
    var cpStrList = toCp.split('.');
    var regCursor = 0, cpCursor = 0;
    while (cpCursor < cpStrList.length && regCursor < regList.length) {
        if (regList[regCursor].indexOf('*') > -1) {
            if (regList[regCursor] === '**') {
                cpCursor++;
                if (cpCursor === cpStrList.length && regCursor === regList.length - 1)
                    return true;
            }
            else if (isMatchWordPattern(regList[regCursor], cpStrList[cpCursor])) {
                cpCursor++;
                regCursor++;
            }
            else {
                return false;
            }
        }
        else if (cpStrList[cpCursor] === regList[regCursor]) {
            cpCursor++;
            regCursor++;
        }
        else {
            return false;
        }
    }
    if (isContained) {
        return cpCursor <= cpStrList.length && regCursor >= regList.length;
    }
    return (cpCursor >= cpStrList.length || regCursor >= regList.length);
}
exports.isMatchKeymapPattern = isMatchKeymapPattern;
function isContained(arr, str, context) {
    return isContainedOrMayContain(arr, str, context, true);
}
exports.isContained = isContained;
function isContainedOrMayContain(arr, str, context, isContain) {
    var nextContext = (context ? context + '.' : '') + str;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var dirs = arr_1[_i];
        if (dirs.indexOf('*') > -1) {
            if (dirs === '*')
                return true;
            if (dirs.length && dirs[0] === '*') {
                if (dirs.substr(2) === str)
                    return true;
            }
            if (isMatchKeymapPattern(dirs, nextContext, isContain)) {
                return true;
            }
        }
        else {
            if (dirs !== '' && dirs === nextContext)
                return true;
            if (context.indexOf(dirs) === 0 || nextContext.indexOf(dirs) === 0)
                return true;
            if (dirs.indexOf(context) === 0 && dirs[nextContext.length] === '.') {
                var left = dirs.substr(context.length);
                if (left === str)
                    return true;
                if (left.indexOf(str) === 0 && left[str.length] === '.')
                    return true;
            }
        }
    }
    return false;
}
exports.isContainedOrMayContain = isContainedOrMayContain;
function isValidReg(reg) {
    if (reg === undefined) {
        return true;
    }
    if (reg.indexOf('**') > -1 && reg !== '**') {
        throw Error('** should not with other chars');
    }
    return true;
}
function isPatternMatchedImpl(regList, cpList) {
    var regCursor = 0, cpCursor = 0;
    if (regList.length === 0 && cpList.length === 0)
        return true;
    while (regCursor < regList.length) {
        isValidReg(regList[regCursor]);
        if (regList[regCursor] === '**' && cpCursor <= cpList.length) {
            while (isValidReg(regList[regCursor + 1]) && regList[regCursor + 1] === '**')
                regCursor++;
            while (cpCursor < cpList.length && !isMatchWordPattern(regList[regCursor + 1], cpList[cpCursor])) {
                cpCursor++;
            }
            if (!regList[regCursor + 1])
                return true;
            if (cpCursor === cpList.length)
                return false;
            if (isPatternMatchedImpl(regList.slice(regCursor + 1), cpList.slice(cpCursor))) {
                return true;
            }
            else {
                cpCursor++;
            }
        }
        if (regList[regCursor] !== '**') {
            if (isMatchWordPattern(regList[regCursor], cpList[cpCursor])) {
                regCursor++;
                cpCursor++;
                if (regCursor === regList.length) {
                    return cpCursor === cpList.length;
                }
            }
            else {
                return false;
            }
        }
    }
    return false;
}
function isPatternMatched(reg, toCp) {
    if (reg === '**')
        return true;
    if (reg === '' && toCp === '')
        return false;
    var regList = reg.split('.');
    var cpStrList = toCp.split('.');
    return isPatternMatchedImpl(regList, cpStrList);
}
exports.isPatternMatched = isPatternMatched;
function ifSomeMatch(regList, key, context) {
    for (var _i = 0, regList_1 = regList; _i < regList_1.length; _i++) {
        var item = regList_1[_i];
        if (isPatternMatched(item, (context ? context + '.' : '') + key)) {
            return true;
        }
    }
    return false;
}
exports.ifSomeMatch = ifSomeMatch;
function isPartialSame(o1, o2, include, exclude, context) {
    if (o1 === o2) {
        return true;
    }
    if (typeof o1 === 'object') {
        var type1 = Object.prototype.toString.call(o1);
        var type2 = Object.prototype.toString.call(o2);
        if (type1 !== type2)
            return false;
        if (type1 === '[object Array]') {
            if (o1.length !== o2.length)
                return false;
            for (var i = 0; i < o1.length; i++) {
                if (include && include.length && !isContainedOrMayContain(include, i.toString(), context || ''))
                    continue;
                if (exclude && exclude.length && ifSomeMatch(exclude, i.toString(), context || ''))
                    continue;
                if (!isPartialSame(o1[i], o2[i], include, exclude, (context ? context + '.' : '') + i)) {
                    return false;
                }
            }
        }
        else {
            var allKeysRaw_1 = Object.keys(o1).concat(Object.keys(o2));
            var keys = allKeysRaw_1.filter(function (key, i) { return allKeysRaw_1.indexOf(key) === i; });
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                if (include && include.length && !isContainedOrMayContain(include, key, context || ''))
                    continue;
                if (exclude && exclude.length && ifSomeMatch(exclude, key, context || ''))
                    continue;
                if (o1.hasOwnProperty(key)) {
                    if (!isPartialSame(o1[key], o2[key], include, exclude, (context ? context + '.' : '') + key)) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    else {
        if (include && include.length) {
            if (isContained(include, context || '', '')) {
                return o1 === o2;
            }
            else {
                return true;
            }
        }
    }
    return false;
}
exports.isPartialSame = isPartialSame;
//# sourceMappingURL=deep_same.js.map