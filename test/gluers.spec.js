import { expect } from 'chai';
import { Gluers } from '../src/name-convention/gluer/gluers';


describe('Gluers', function () {
    describe('#LowerCamelCase', function () {
        it('should return a lower camel case name', function () {
            let pieces = ['a','complex','name'];
            let expected = 'aComplexName';
            let result = Gluers.LowerCamelCase.glue(pieces);
            expect(result).to.equal(expected);
        })
        it('should return a lower camel case name', function () {
            let pieces = ['a','complex','name','with','numbers','123'];
            let expected = 'aComplexNameWithNumbers123';
            let result = Gluers.LowerCamelCase.glue(pieces);
            expect(result).to.equal(expected);
        })
    })
    describe('#UpperCamelCase', function () {
        it('should return a upper camel case name', function () {
            let pieces = ['a','complex','name'];
            let expected = 'AComplexName';
            let result = Gluers.UpperCamelCase.glue(pieces);
            expect(result).to.equal(expected);
        })
        it('should return a upper camel case name', function () {
            let pieces = ['a','complex','name','with','numbers','123'];
            let expected = 'AComplexNameWithNumbers123';
            let result = Gluers.UpperCamelCase.glue(pieces);
            expect(result).to.equal(expected);
        })
    })
    describe('#LowerSnakeCase', function () {
        it('should return a lower snake case name', function () {
            let pieces = ['a','complex','name'];
            let expected = 'a_complex_name';
            let result = Gluers.LowerSnakeCase.glue(pieces);
            expect(result).to.equal(expected);
        })
        it('should return a lower snake case name', function () {
            let pieces = ['a','complex','name','with','numbers','123'];
            let expected = 'a_complex_name_with_numbers_123';
            let result = Gluers.LowerSnakeCase.glue(pieces);
            expect(result).to.equal(expected);
        })
    })
    describe('#UpperSnakeCase', function () {
        it('should return a upper snake case name', function () {
            let pieces = ['a','complex','name'];
            let expected = 'A_COMPLEX_NAME';
            let result = Gluers.UpperSnakeCase.glue(pieces);
            expect(result).to.equal(expected);
        })
        it('should return a upper snake case name', function () {
            let pieces = ['a','complex','name','with','numbers','123'];
            let expected = 'A_COMPLEX_NAME_WITH_NUMBERS_123';
            let result = Gluers.UpperSnakeCase.glue(pieces);
            expect(result).to.equal(expected);
        })
    })
    describe('#LowerKebabCase', function () {
        it('should return a lower kebab case name', function () {
            let pieces = ['a','complex','name'];
            let expected = 'a-complex-name';
            let result = Gluers.LowerKebabCase.glue(pieces);
            expect(result).to.equal(expected);
        })
        it('should return a lower kebab case name', function () {
            let pieces = ['a','complex','name','with','numbers','123'];
            let expected = 'a-complex-name-with-numbers-123';
            let result = Gluers.LowerKebabCase.glue(pieces);
            expect(result).to.equal(expected);
        })
    })
    describe('#UpperKebabCase', function () {
        it('should return a upper kebab case name', function () {
            let pieces = ['a','complex','name'];
            let expected = 'A-COMPLEX-NAME';
            let result = Gluers.UpperKebabCase.glue(pieces);
            expect(result).to.equal(expected);
        })
        it('should return a upper kebab case name', function () {
            let pieces = ['a','complex','name','with','numbers','123'];
            let expected = 'A-COMPLEX-NAME-WITH-NUMBERS-123';
            let result = Gluers.UpperKebabCase.glue(pieces);
            expect(result).to.equal(expected);
        })
    })
})