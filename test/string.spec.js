import { expect } from 'chai'
import { upperCase, lowerCase, upperCaseFirst, lowerCaseFirst } from '../src/string.js';

describe('#upperCase',function(){
    it('when a string should return a upper case string',function(){
        expect(upperCase('test')).to.equal('TEST')
    })
})

describe('#lowerCase',function(){
    it('when a string should return a lower case string',function(){
        expect(lowerCase('TEST')).to.equal('test')
    })
})

describe('#lowerCaseFisrt',function(){
    it('when a string should return a equal string with only the first letter lower',function(){
        expect(lowerCaseFirst('TeSt')).to.equal('teSt')
    })
})

describe('#upperCaseFirst',function(){
    it('when a string should return a equal string with only the first letter upper',function(){
        expect(upperCaseFirst('tEsT')).to.equal('TEsT')
    })
})