import { noop, isNullOrUndefined } from '@huehuejs/common-lang';

export class DefaultGluer {

    constructor(
        protected glueString = '',
        protected piecePreparer = noop,
        protected namePreparer = noop
    ) { }

    glue(namePieces) {
        if (isNullOrUndefined(namePieces)) {
            throw Error("NamePieces cannot be undefined!");
        }
        return this.namePreparer(Array.from(namePieces).map(this.piecePreparer).join(this.glueString));
    }
}