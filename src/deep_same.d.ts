export declare function isMatchWordPattern(reg: string, toCp: string): boolean;
export declare function isMatchKeymapPattern(reg: string, toCp: string, isContained?: true): boolean;
export declare function isContained(arr: string[], str: string, context: string): boolean;
export declare function isContainedOrMayContain(arr: string[], str: string, context: string, isContain?: true): boolean;
export declare function isPatternMatched(reg: string, toCp: string): boolean;
export declare function ifSomeMatch(regList: string[], key: string, context: string): boolean;
export declare function isPartialSame(o1: any, o2: any, include?: string[], exclude?: string[], context?: string): boolean;
