import {  NameConventionConverter } from '../converter';


export const makeCodec = (fromConvention, toConvention) => {
    return new NameConventionCodec(
        new NameConventionConverter(fromConvention.gluer,toConvention.splitter),
        new NameConventionConverter(toConvention.gluer,fromConvention.splitter)
    );
}

export class NameConventionCodec {

    constructor(decoder,encoder){
        this.encoder = encoder;
        this.decoder = decoder;
    }

    encode(data) {
        return this.encoder.parse(data);
    }

    decode(data) {
        return this.decoder.parse(data);
    }

}