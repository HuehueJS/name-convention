const default_matcher = function (value, originalKeyTail, parsedKeyTail) {
    return typeof value === "object";
}

export class NameConventionConverter {
    constructor(gluer, splitter, matcher = default_matcher) {
        this.gluer = gluer;
        this.splitter = splitter;
        this.matcher = matcher;
    }

    parseString(oneName) {
        return this.gluer.glue(this.splitter.split(oneName));
    }

    _parse(item, originalKeyTail, parsedKeyTail) {
        let newItem = item.constructor();
        for (const key in item) {
            const newOriginalKeyTail = originalKeyTail.concat([key]);
            const parsedKey = typeof key === "string" ? this.parseString(key) : key;
            const newParsedKeyTail = parsedKeyTail.concat([parsedKey]);
            const value = item[key];
            const parsedValue = this.matcher(value, originalKeyTail, parsedKeyTail) ? this._parse(value, originalKeyTail, parsedKeyTail) : value;
            newItem[parsedKey] = parsedValue;
        }
        return newItem;
    }

    parse(item) {
        if (!(this.gluer || this.splitter || this.matcher)) {
            throw Error();
        }
        if (typeof item === "string") {
            return this.parseString(item);
        }
        if(typeof item === "object"){
            return this._parse(item, [], [])
        }
        throw Error();
    }
}