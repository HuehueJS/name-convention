export class SnakeToCamelGluer {
    glue(namePieces){
        return namePieces.map(it => it.toLowerCase()).join('_');
    }
}