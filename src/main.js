export const getattr = function (obj, key, defaultValue = undefined) {
    if (obj === undefined || obj === null) {
        return defaultValue;
    }
    if( typeof obj !== 'object'){
        throw TypeError();
    }
    if (['string','number'].indexOf(typeof key) !== -1) {
        key = [key];
    }
    let currentValue = obj;
    for (let k of key) {
        currentValue = currentValue[k];
        if (currentValue === undefined) {
            return defaultValue;
        }
    }
    return currentValue;
}