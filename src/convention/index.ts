import { Gluers } from '../gluer/gluers';
import { Splitters } from '../splitter/splitters';
import { Gluer } from '../gluer';
import { Splitter } from '../splitter';

export interface NameConvention {
    gluer: Gluer;
    splitter: Splitter;
}

export const NameConventions = {
    UpperCammelCase: { gluer: Gluers.UpperCamelCase, splitter: Splitters.CamelCase },
    LowerCammelCase: { gluer: Gluers.LowerCamelCase, splitter: Splitters.CamelCase },
    UpperSnakeCase: { gluer: Gluers.UpperSnakeCase, splitter: Splitters.SnakeCase },
    LowerSnakeCase: { gluer: Gluers.LowerSnakeCase, splitter: Splitters.SnakeCase },
    UpperKebabCase: { gluer: Gluers.UpperKebabCase, splitter: Splitters.KebabCase },
    LowerKebabCase: { gluer: Gluers.LowerKebabCase, splitter: Splitters.KebabCase }
};