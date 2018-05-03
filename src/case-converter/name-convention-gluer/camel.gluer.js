import {} from '../../prototypes';

export class CamelGluer {
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
        return namePieces[0] + namePieces.slice(1).map(it => it.toLowerCase().capitalize()).join('');
    }
}