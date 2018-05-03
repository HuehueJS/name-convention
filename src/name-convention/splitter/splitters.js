import { DefaultSplitter } from './default-splitter'

export const Splitters = {
    AnyCase: new DefaultSplitter(
        new RegExp('([^A-Z0-9])([A-Z0-9])', 'g'),
        new RegExp('[ _-]+', 'g'),
    ),
    CamelCase: new DefaultSplitter(
        new RegExp('([^A-Z0-9])([A-Z0-9])', 'g')
    ),
    SnakeCase: new DefaultSplitter(
        null,
        new RegExp('_+','g')
    ),
    KebabCase: new DefaultSplitter(
        null,
        new RegExp('-+','g')
    )
};