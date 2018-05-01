import { CaseConverter } from '../src/case-converter/case-converter'
import { expect } from 'chai'

describe('#case-converter', function () {
    it("decode string snake_case to camelCase", () => {
        expect(CaseConverter.decode("teste_teste")).to.equal("teste_teste coxinha");
    });
    it("decode string snake_case to camelCase", () => {
        const object = {
            first_name: 'Leobardo',
            last_name: 'Nibiru',
            address: {
                city: 'dasdsadas',
                state: 'dsadsadsa'
            }
        }
        const call = CaseConverter.decode(object);
        const expected_object = { 
            first_name_coxinha: 'Leobardo',
            last_name_coxinha: 'Nibiru',
            address_coxinha: { 
                city_coxinha: 'dasdsadas', 
                state_coxinha: 'dsadsadsa' 
            }
        };
        expect(call).to.deep.equal(expected_object);
    });

    it("decode string snake_case to camelCase", () => {
        const object = [{
            first_name: 'Leobardo',
            last_name: 'Nibiru',
            address: {
                city: 'dasdsadas',
                state: 'dsadsadsa',
                address: {
                    city: 'dasdsadas',
                    state: 'dsadsadsa'
                }
            }
        }]
        const call = CaseConverter.decode(object);
        const expected_object = [{ 
            first_name_coxinha: 'Leobardo',
            last_name_coxinha: 'Nibiru',
            address_coxinha: { 
                city_coxinha: 'dasdsadas', 
                state_coxinha: 'dsadsadsa',
                address_coxinha: { 
                    city_coxinha: 'dasdsadas', 
                    state_coxinha: 'dsadsadsa' 
                }
            }
        }];
        expect(call).to.deep.equal(expected_object);
    });
});