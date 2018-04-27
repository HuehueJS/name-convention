import { setattr } from '../src/main.js'
import { expect } from 'chai'

describe("#setattr", function () {
    it('when key exists should set the value', function () {
        let obj = { 'key': null };
        setattr(obj, 'key', 'value')
        expect(obj.key).to.equal('value')
    })
    it('when key dosn\'t exists should put the value', function () {
        let obj = { 'key': null };
        setattr(obj, 'key', 'value')
        expect(obj.key).to.equal('value')
    })
})