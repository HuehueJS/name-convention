import { DefaultGluer } from './default-gluer.js';
import { upperCase, lowerCase, upperCaseFirst, lowerCaseFirst } from '../string.js';

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
        '_'
    ),
    UpperSnakeCase: new DefaultGluer(
        '_',
        upperCase
    )
}