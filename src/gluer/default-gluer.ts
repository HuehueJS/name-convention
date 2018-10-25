import { noop, isNullOrUndefined } from '@huehuejs/common-lang';

export interface Gluer {
    glue(namePieces: Iterable<string> | ArrayLike<string>): string;
}

export class DefaultGluer implements Gluer {

    constructor(
        protected glueString: string = '',
        protected piecePreparer: (_: string) => string = noop,
        protected namePreparer: (_: string) => string = noop
    ) { }

    glue(namePieces: Iterable<string> | ArrayLike<string>): string {
        if (isNullOrUndefined(namePieces)) {
            throw Error("NamePieces cannot be undefined!");
        }
        return this.namePreparer(Array.from(namePieces).map(this.piecePreparer).join(this.glueString));
    }
}