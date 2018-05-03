import { expect } from 'chai';
import { Gluers } from '../src/name-convention/gluers';


describe('Gluers', function () {
    describe('#LowerCamelCaseGluer', function () {
        it('should return a lower camel case name', function () {
            let pieces = ['a','complex','name'];
            let expected = 'aComplexName';
            let result = Gluers.LowerCamelCase.glue(pieces);
            console.log(result);
            expect(result).to.equal(expected);
        })
        it('should return a lower camel case name', function () {
            let pieces = ['a','complex','name','with','numbers','123'];
            let expected = 'aComplexNameWithNumbers123';
            let result = Gluers.LowerCamelCase.glue(pieces);
            console.log(result);
            expect(result).to.equal(expected);
        })
    })
    describe('#UpperCamelCaseGluer', function () {
        it('should return a upper camel case name', function () {
            let pieces = ['a','complex','name'];
            let expected = 'AComplexName';
            let result = Gluers.UpperCamelCase.glue(pieces);
            console.log(result);
            expect(result).to.equal(expected);
        })
        it('should return a upper camel case name', function () {
            let pieces = ['a','complex','name','with','numbers','123'];
            let expected = 'AComplexNameWithNumbers123';
            let result = Gluers.UpperCamelCase.glue(pieces);
            console.log(result);
            expect(result).to.equal(expected);
        })
    })
})