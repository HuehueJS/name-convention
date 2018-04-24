import { getattr } from '../src/main.js'
import { expect } from 'chai'



describe('global',function(){
    describe('#getattr',function(){
        it('would return the value',function(){
            let a = {'a':1}
            expect(getattr(a,'a')).to.equal(1)
        })
    })
})