import { DefaultGluer } from './default-gluer.js';
import { upperCase, lowerCase, upperCaseFirst, lowerCaseFirst } from '../string.js';


export const LowerCamelCaseGluer = new DefaultGluer(
    '',
    upperCaseFirst,
    lowerCaseFirst
);

export const UpperCamelCaseGluer = new DefaultGluer(
    '',
    upperCaseFirst
);

export const LowerSnakeCase = new DefaultGluer(
    '_'
);

export const UpperSnakeCase = new DefaultGluer(
    '_',
    upperCase
);