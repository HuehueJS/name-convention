import { isNullOrUndefined } from '@huehuejs/common-lang';


export interface Splitter {
    split(name: string): Array<string>;
}

export class DefaultSplitter implements Splitter {

    constructor(
        protected preparerRegex: RegExp = null,
        protected splitterRegex: RegExp = new RegExp(' +', 'g'),
        protected replacePattern: string = '$1 $2'
    ) { }

    split(name: string): Array<string> {
        if (isNullOrUndefined(name)) {
            throw Error("Name cannot be undefined!");
        }
        const preparedName = this.preparerRegex ? name.replace(this.preparerRegex, this.replacePattern) : name;
        return preparedName
            .split(this.splitterRegex);
    }

}