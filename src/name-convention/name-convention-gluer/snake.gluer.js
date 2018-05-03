export class SnakeGluer {
    glue(namePieces) {
        if(typeof namePieces !== 'object') {
            throw TypeError();
        }
        if(!namePieces) {
            throw Error("NamePieces cannot be undefined!");
        }
        if(!namePieces.length) {
            throw Error("NamePieces cannot be empty!");
        }
        return namePieces.map(it => it.toLowerCase()).join('_');
    }
}