import { isNullOrUndefined } from '../../main';

export class DefaultSplitter {

    constructor(preparerRegex, splitterRegex = new RegExp(' +', 'g'), replacePattern = '$1 $2') {
        this.preparerRegex = preparerRegex;
        this.splitterRegex = splitterRegex;
        this.replacePattern = replacePattern;
    }

    split(name) {
        if (isNullOrUndefined(name)) {
            throw Error("Name cannot be undefined!");
        }
        if (typeof name !== 'string') {
            throw TypeError();
        }
        const preparedName = this.preparerRegex ? name.replace(this.preparerRegex, this.replacePattern) : name;
        return preparedName
            .split(this.splitterRegex);
    }

}