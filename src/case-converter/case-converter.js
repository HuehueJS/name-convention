export class CaseConverter {

    static decode(item) {
        if(typeof item === 'string') {
            return item + ' coxinha';
        }
        if(Array.isArray(item)) {
            let arr = [];
            for(let it of item) {
                arr.push(CaseConverter.decode(it));
            }
            return arr;
        }
        let obj = {};
        for(const key in item) {
            if(typeof item[key] === 'object') {
                item[key] = CaseConverter.decode(item[key]);
            }
            const new_key = key+'_coxinha';
            obj[new_key] = item[key];
        }
        return obj;
    }
}