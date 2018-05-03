import { expect } from 'chai';
import *  as Gluers from '../src/name-convention/gluers.js';


describe('Gluers', function () {
    describe('#LowerCamelCaseGluer', function () {
        it('should return a camel case name', function () {
            let pieces = ['a','complex','name'];
            let expected = 'aComplexName';
            let result = Gluers.LowerCamelCaseGluer.glue(pieces);
            console.log(result);
            expect(result).to.equal(expected);
        })
    })
})