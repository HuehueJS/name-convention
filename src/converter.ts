import { Gluer } from "./gluer";
import { Splitter } from "./splitter";

export type ParseMatcher = ( value : any, originalKeyTail : Array<string>, parsedKeyTail : Array<string>) => boolean;

export const DEFAULT_MATCHER : ParseMatcher = (value, originalKeyTail, parsedKeyTail) => {
    return typeof value === "object";
}

export interface NameConventionParser {
    parseString(oneName: string);
    parse(data: any): any;
}

export class NameConventionConverter implements NameConventionParser {
    constructor(
        protected gluer: Gluer,
        protected splitter: Splitter,
        protected matcher : ParseMatcher = DEFAULT_MATCHER
    ) { }

    parseString(oneName: string): string {
        return this.gluer.glue(this.splitter.split(oneName));
    }

    protected _parse(item, originalKeyTail, parsedKeyTail) {
        const newItem = item.constructor();
        for (const key in item) {
            const newOriginalKeyTail = originalKeyTail.concat([key]);
            const parsedKey = typeof key === "string" ? this.parseString(key) : key;
            const newParsedKeyTail = parsedKeyTail.concat([parsedKey]);
            const value = item[key];
            const parsedValue = this.matcher(value, originalKeyTail, parsedKeyTail) ? this._parse(value, newOriginalKeyTail, newParsedKeyTail) : value;
            newItem[parsedKey] = parsedValue;
        }
        return newItem;
    }

    parse(item: any): any {
        if (!(this.gluer || this.splitter || this.matcher)) {
            throw Error();
        }
        if (typeof item === "string") {
            return this.parseString(item);
        }
        if (typeof item === "object") {
            return this._parse(item, [], [])
        }
        throw Error();
    }
}