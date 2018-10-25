import { DefaultGluer } from './default-gluer.js';
import { upperCase, lowerCase, upperCaseFirst, lowerCaseFirst } from '@huehuejs/common-lang/string';

export const Gluers = {
    LowerCamelCase: new DefaultGluer(
        '',
        upperCaseFirst,
        lowerCaseFirst
    ),
    UpperCamelCase: new DefaultGluer(
        '',
        upperCaseFirst
    ),
    LowerSnakeCase: new DefaultGluer(
        '_',
        lowerCase
    ),
    UpperSnakeCase: new DefaultGluer(
        '_',
        upperCase
    ),
    LowerKebabCase: new DefaultGluer(
        '-',
        lowerCase
    ),
    UpperKebabCase: new DefaultGluer(
        '-',
        upperCase
    )
}