import { isNullOrUndefined } from '@huehuejs/common-lang';

export class DefaultSplitter {

    constructor(
        protected preparerRegex,
        protected splitterRegex = new RegExp(' +', 'g'),
        protected replacePattern = '$1 $2'
    ) { }

    split(name) {
        if (isNullOrUndefined(name)) {
            throw Error("Name cannot be undefined!");
        }
        const preparedName = this.preparerRegex ? name.replace(this.preparerRegex, this.replacePattern) : name;
        return preparedName
            .split(this.splitterRegex);
    }

}