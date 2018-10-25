import { expect } from 'chai';

import { Splitters } from '../src/splitter/splitters';

describe('Splitter',function(){

    describe('#CamelCase',function(){
        it('should split a camel case name',function(){
            let name = 'aComplexName';
            let expected = ['a','Complex','Name'];
            let result = Splitters.CamelCase.split(name);
            expect(result).to.deep.equal(expected);
        })
        it('should split a camel case name',function(){
            let name = 'aComplexNameWithNumbers123';
            let expected = ['a','Complex','Name','With','Numbers','123'];
            let result = Splitters.CamelCase.split(name);
            expect(result).to.deep.equal(expected);
        })
    })
    describe('#SnakeCase',function(){
        it('should split a snake case name',function(){
            let name = 'a_Complex_name';
            let expected = ['a','Complex','name'];
            let result = Splitters.SnakeCase.split(name);
            expect(result).to.deep.equal(expected);
        })
        it('should split a camel case name',function(){
            let name = 'a_Complex_Name_With_Numbers_123';
            let expected = ['a','Complex','Name','With','Numbers','123'];
            let result = Splitters.SnakeCase.split(name);
            expect(result).to.deep.equal(expected);
        })
    })
    describe('#KebabCase',function(){
        it('should split a kebab case name',function(){
            let name = 'a-Complex-name';
            let expected = ['a','Complex','name'];
            let result = Splitters.KebabCase.split(name);
            expect(result).to.deep.equal(expected);
        })
        it('should split a kebab case name',function(){
            let name = 'a-Complex-Name-With-Numbers-123';
            let expected = ['a','Complex','Name','With','Numbers','123'];
            let result = Splitters.KebabCase.split(name);
            expect(result).to.deep.equal(expected);
        })
    })
    describe('#AnyCase',function(){
        it('should split a mix case name',function(){
            let name = 'aComplex_name';
            let expected = ['a','Complex','name'];
            let result = Splitters.AnyCase.split(name);
            expect(result).to.deep.equal(expected);
        })
        it('should split a mix case name',function(){
            let name = 'aComplex-Name_With-Numbers123';
            let expected = ['a','Complex','Name','With','Numbers','123'];
            let result = Splitters.AnyCase.split(name);
            expect(result).to.deep.equal(expected);
        })
    })
});