import { expect } from 'chai';
import { Splitters } from '../src/splitter/splitters';
import { Gluers } from '../src/gluer/gluers';
import { NameConventionConverter } from '../src/converter';

describe('Name Convention Converter', function () {

    let nameConverter = null;

    let snakeGluer = null;

    let camelSplitter = null;

    beforeEach(() => {
        snakeGluer = Gluers.LowerSnakeCase;
        camelSplitter = Splitters.CamelCase;
        nameConverter = new NameConventionConverter(Gluers.LowerSnakeCase, Splitters.CamelCase);
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
        it("should throw an error", () => {
            nameConverter = new NameConventionConverter(null, null, null);
            const test = () => nameConverter.parse();
            expect(test).to.throw();
        });
    });
});