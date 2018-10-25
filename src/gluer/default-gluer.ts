import { noop, isNullOrUndefined } from '@huehuejs/common-lang';

export class DefaultGluer {

    constructor(glueString = '', piecePreparer = noop, namePreparer = noop) {
        this.glueString = glueString;
        this.namePreparer = namePreparer;
        this.piecePreparer = piecePreparer;
    }

    glue(namePieces) {
        if (isNullOrUndefined(namePieces)) {
            throw Error("NamePieces cannot be undefined!");
        }
        return this.namePreparer(Array.from(namePieces).map(this.piecePreparer).join(this.glueString));
    }
}