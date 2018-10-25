import { NameConventionConverter } from '../converter';
import { NameConvention } from '../convention';

export interface Codec {
    encode(data: any): any;
    decode(data: any): any;
}

export const makeCodec = (fromConvention: NameConvention, toConvention: NameConvention) => {
    return new NameConventionCodec(
        new NameConventionConverter(fromConvention.gluer, toConvention.splitter),
        new NameConventionConverter(toConvention.gluer, fromConvention.splitter)
    );
}

export class NameConventionCodec implements Codec {

    constructor(
        protected decoder,
        protected encoder
    ) { }

    encode(data: any): any {
        return this.encoder.parse(data);
    }

    decode(data: any): any {
        return this.decoder.parse(data);
    }

}