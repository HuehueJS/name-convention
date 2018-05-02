export class NameConventionConverter {
    constructor(gluer,splitter){
        this.gluer = gluer;
        this.splitter = splitter;
    }

    parseString(oneName) {
        return this.gluer.glue(this.splitter.split(oneName));
    }

    parse(item){
        if(typeof item === 'string') {
            return this.parseString(item);
        }
        if(Array.isArray(item)) {
            let arr = [];
            for(let it of item) {
                arr.push(this.parse(it));
            }
            return arr;
        }
        let obj = {};
        for(const key in item) {
            if(typeof item[key] === 'object') {
                item[key] = this.parse(item[key]);
            }
            const new_key = this.parseString(key);
            obj[new_key] = item[key];
        }
        return obj;
    }
}