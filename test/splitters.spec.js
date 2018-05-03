import { expect } from 'chai';

import { Splitters } from '../src/name-convention/splitter/splitters';

describe('Splitter',function(){

    describe('#CameCase',function(){
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
});