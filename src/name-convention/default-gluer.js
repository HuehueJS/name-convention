
isNullOrUndefined = obj => [null,undefined].indexOf(obj) !== -1

noop = x => x

export class DefaultGluer {

    constructor(glue='',piecePreparer=noop,namePreparer=noop){
        this.glue = glue;
        this.namePreparer = namePreparer;
        this.piecePreparer = piecePreparer;
    }

    glue(namePieces) {
        if(isNullOrUndefined(namePieces)) {
            throw Error("NamePieces cannot be undefined!");
        }
        return this.namePreparer(Array.from(namePieces).map(this.piecePreparer).join(this.glue));
    }
}