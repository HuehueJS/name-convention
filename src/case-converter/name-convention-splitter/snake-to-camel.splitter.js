export class SnakeToCamelSplitter {
    split(name) {
        const regex = new RegExp('([a-z])([A-Z])', 'g');
        return name.replace(regex, '$1 $2').split(' ');
    }
}