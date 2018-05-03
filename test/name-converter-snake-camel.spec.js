import { expect } from 'chai'
import { SnakeSplitter } from '../src/case-converter/name-convention-splitter/snake.splitter';
import { CamelGluer } from '../src/case-converter/name-convention-gluer/camel.gluer';
import { NameConventionConverter } from '../src/case-converter/name-convention-converter';

describe('Name Convention Converter Snak to Camel', function () {
    let camelGluer = null;
    let snakeSplitter = null;

    let nameConverter = null;

    beforeEach(() => {
        camelGluer = new CamelGluer();
        snakeSplitter = new SnakeSplitter();
        nameConverter = new NameConventionConverter(camelGluer, snakeSplitter); 
    });

    describe("#String snake_case to camelCase", () => {
        it("parse snake_case to camelCase", () => {
            expect(nameConverter.parse("first_name")).to.equal("firstName");
        });

        it("what return when name is already parsed", () => {
            expect(nameConverter.parse("firstName")).to.equal("firstName");
        });

        it("parse snake_case to camelCase and expect a wrong value", () => {
            expect(nameConverter.parse("first_name")).to.not.equal("first_name");
        });
    });

    describe("#Array with string snake_case to camelCase", () => {
        it("parse snake_case to camelCase", () => {
            const toParseArr = ['first_name', 'last_name'];
            const expectedArr = ['firstName', 'lastName'];
            expect(nameConverter.parse(toParseArr)).to.deep.equal(expectedArr);
        });

        it("what return when name is already parsed", () => {
            const arr = ['firstName', 'lastName'];
            expect(nameConverter.parse(arr)).to.deep.equal(arr);
        });

        it("parse snake_case to camelCase and expect a wrong value", () => {
            const arr = ['first_name', 'last_name'];
            expect(nameConverter.parse(arr)).to.not.deep.equal(arr);
        });
    });

    describe("#Object snake_case to camelCase", () => {
        it("parse snake_case to camelCase", () => {
            const toParseObject = {
                first_name: "Bruce",
                last_name: "Banner"
            };
            const expectedObject = {
                firstName: "Bruce",
                lastName: "Banner"
            };
            expect(nameConverter.parse(toParseObject)).to.deep.equal(expectedObject);
        });

        it("parse nested object snake_case to camelCase", () => {
            const toParseObject = {
                first_name: "Bruce",
                last_name: "Banner",
                contact: {
                    cell_phone: "33 93333-3333",
                    phone_number: "33 93333-3333",
                    email: "bruce.banner@avengers.com" 
                }
            };
            const expectedObject = {
                firstName: "Bruce",
                lastName: "Banner",
                contact: {
                    cellPhone: "33 93333-3333",
                    phoneNumber: "33 93333-3333",
                    email: "bruce.banner@avengers.com" 
                }
            };
            expect(nameConverter.parse(toParseObject)).to.deep.equal(expectedObject);
        });

        it("what return when object keys is already parsed", () => {
            const object = {
                firstName: "Bruce",
                lastName: "Banner",
            };
            expect(nameConverter.parse(object)).to.deep.equal(object);
        });

        it("what return when object keys and nested object keys is already parsed", () => {
            const object = {
                firstName: "Bruce",
                lastName: "Banner",
                contact: {
                    cellPhone: "33 93333-3333",
                    phoneNumber: "33 93333-3333",
                    email: "bruce.banner@avengers.com" 
                }
            };
            expect(nameConverter.parse(object)).to.deep.equal(object);
        });

        it("parse snake_case to camelCase and expect a wrong value", () => {
            const object = {
                first_name: "Bruce",
                last_name: "Banner"
            };
            expect(nameConverter.parse(object)).to.not.deep.equal(object);
        });
    });

    describe("#Array with Objects snake_case to camelCase", () => {
        it("parse Array with multiple nested object snake_case to camelCase", () => {
            const toParseArr = [{
                first_name: "Wanda",
                last_name: "Maximoff",
                contact: {
                    cell_phone: "33 93333-3333",
                    phone_number: "33 93333-3333",
                    email: "wanda.maximoff@avengers.com"
                }
            },
            {
                first_name: "Clint",
                last_name: "Barton",
                contact: {
                    cell_phone: "33 93333-3333",
                    phone_number: "33 93333-3333",
                    email: "clint.barton@avengers.com"
                }
            }];
            const expectedArr = [{
                firstName: "Wanda",
                lastName: "Maximoff",
                contact: {
                    cellPhone: "33 93333-3333",
                    phoneNumber: "33 93333-3333",
                    email: "wanda.maximoff@avengers.com"
                }
            },
            {
                firstName: "Clint",
                lastName: "Barton",
                contact: {
                    cellPhone: "33 93333-3333",
                    phoneNumber: "33 93333-3333",
                    email: "clint.barton@avengers.com"
                }
            }];
            expect(nameConverter.parse(toParseArr)).to.deep.equal(expectedArr);
        });

        it("parse an array with one nested object snake_case to camelCase", () => {
            const toParseArr = [{
                first_name: "Clint",
                last_name: "Barton",
                contact: {
                    cell_phone: "33 93333-3333",
                    phone_number: "33 93333-3333",
                    email: "clint.barton@avengers.com"
                }
            }];
            const expectedArr = [{
                firstName: "Clint",
                lastName: "Barton",
                contact: {
                    cellPhone: "33 93333-3333",
                    phoneNumber: "33 93333-3333",
                    email: "clint.barton@avengers.com"
                }
            }]; 
            expect(nameConverter.parse(toParseArr)).to.deep.equal(expectedArr);
        });
    });
});