import { setattr } from '../src/main'
import { expect } from 'chai'

describe("#setattr", function () {
    it('when key exists should set the value', function () {
        let obj = { 'key': null };
        setattr(obj, 'key', 'value')
        expect(obj.key).to.equal('value')
    })
    it('when key doesn\'t exists should put the value', function () {
        let obj = { 'key': null };
        setattr(obj, 'key', 'value')
        expect(obj.key).to.equal('value')
    })
    it('when key is an array and doesn\'t exists should put the value recursively', function () {
        let obj = {};
        setattr(obj, ['key_1','key_2'], 'value')
        expect(obj.key_1.key_2).to.equal('value')
    })
    it('when key is an array and exists partially should throw an error', function () {
        let obj = {'key_1':null}
        const test = () => setattr(obj, ['key_1','key_2'], 'value')
        expect(test).to.throw()
    })
    it('when key is an array and exists partially should put the value with force', function () {
        let obj = {'key_1':null}
        setattr(obj, ['key_1','key_2'], 'value',true)
        expect(obj.key_1.key_2).to.equal('value')
    })
    it('force can\'t replace empty object', function () {
        let empty = {}
        let obj = {'key_1':empty}
        setattr(obj, ['key_1','key_2'], 'value',true)
        expect(obj.key_1).to.equal(empty)
    })
})