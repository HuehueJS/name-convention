import { isNullOrUndefined } from 'huehuejs-common-lang';

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
        const preparedName = this.preparerRegex ? name.replace(this.preparerRegex, this.replacePattern) : name;
        return preparedName
            .split(this.splitterRegex);
    }

}