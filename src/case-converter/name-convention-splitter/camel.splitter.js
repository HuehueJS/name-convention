export class CamelSplitter {
    split(name) {
        if(typeof name !== 'string') {
            throw TypeError();
        }
        if(!name) {
            throw Error("Name cannot be undefined!");
        }
        const regex = new RegExp('([a-z])([A-Z])', 'g');
        return name.replace(regex, '$1 $2').split(' ');
    }
}