export class NameJoinerCamel {
    joiner(...items) {
        let str = [items[0]];
        for(const it of items) {
            str.push(it.charAt(0).toUpperCase() + it.slice(1));
        }
        return str.join('');
    }
}