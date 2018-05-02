import {} from '../../prototypes';

export class CamelToSnakeGluer {
    glue(namePieces){
        return namePieces.map(it => it.toLowerCase()).join('_');
    }
}