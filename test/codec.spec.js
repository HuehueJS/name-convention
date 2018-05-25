import { expect } from 'chai';
import { Gluers } from '../src/gluer/gluers';
import { Splitters } from '../src/splitter/splitters';
import { NameConventionConverter } from '../src/converter';
import { makeCodec } from '../src/codec/index';
import { NameConventions } from '../src/convention/index';


describe('NameConvetionCodec', function () {
    let codec = makeCodec(
        NameConventions.LowerSnakeCase,
        NameConventions.LowerCammelCase
    );
    let snakeCaseData = {
        'a_value' : 1,
        'an_object' : {
            'a_value' : 1
        },
        'an_array' : [{
            'a_value' : 1,
            'an_object' : {
                'a_value' : 1
            }
        }]
    };
    let camelCaseData = {
        'aValue' : 1,
        'anObject' : {
            'aValue' : 1
        },
        'anArray' : [{
            'aValue' : 1,
            'anObject' : {
                'aValue' : 1
            }
        }]
    };
    describe('#encode', function () {
        it('encode snake case should return camel case', function () {
            expect(codec.encode(snakeCaseData)).to.deep.equal(camelCaseData);
        })
        it('encode camel case should return camel case', function () {
            expect(codec.encode(camelCaseData)).to.deep.equal(camelCaseData);
        })
    })
    describe('#decode', function () {
        it('decode camel case should return snake case', function () {
            expect(codec.decode(camelCaseData)).to.deep.equal(snakeCaseData);
        })
        it('decode snake case should return snake case', function () {
            expect(codec.decode(snakeCaseData)).to.deep.equal(snakeCaseData);
        })
    })
})