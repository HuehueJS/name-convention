import { expect } from 'chai'
import { CamelSplitter } from '../src/name-convention/name-convention-splitter/camel.splitter';
import { SnakeGluer } from '../src/name-convention/name-convention-gluer/snake.gluer';
import { NameConventionConverter } from '../src/name-convention/name-convention-converter';

describe('Name Convention Converter', function () {
    let snakeGluer = null;
    let camelSplitter = null;

    let nameConverter = null;

    beforeEach(() => {
        snakeGluer = new SnakeGluer();
        camelSplitter = new CamelSplitter();
        nameConverter = new NameConventionConverter(snakeGluer, camelSplitter); 
    });

    describe("#parseString method", () => {
        it("parseString with gluer and splitter", () => {
            expect(nameConverter.parseString("firstName")).to.equal("first_name");
        });

        it("parseString with gluer and splitter, but without name", () => {
            const test = () => nameConverter.parseString(undefined);
            expect(test).to.throw();
        });

        it("parseString without gluer and splitter", () => {
            nameConverter = new NameConventionConverter(null, null);
            const test = () => nameConverter.parseString("firstName");
            expect(test).to.throw();
        });

        it("parseString without gluer", () => {
            nameConverter = new NameConventionConverter(null, camelSplitter);
            const test = () => nameConverter.parseString("firstName");
            expect(test).to.throw();
        });

        it("parseString without splitter", () => {
            nameConverter = new NameConventionConverter(snakeGluer, null);
            const test = () => nameConverter.parseString("firstName");
            expect(test).to.throw();
        });
    });

    describe("#parse method", () => {
        it("parse a number", () => {
            const test = () => nameConverter.parse(138);
            expect(test).to.throw();
        });
    });
});