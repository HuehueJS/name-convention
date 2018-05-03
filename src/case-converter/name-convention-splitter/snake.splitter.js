export class SnakeSplitter {
    split(name) {
        if(typeof name !== 'string') {
            throw TypeError();
        }
        if(!name) {
            throw Error("Name cannot be undefined!");
        }
        const regex = new RegExp('([a-z])_([a-z])?', 'g');
        return name.replace(regex, '$1 $2').split(' ');
    }
}