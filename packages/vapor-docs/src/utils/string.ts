import camelCase from 'lodash/camelCase';
import startCase from 'lodash/startCase';

export const PascalCase = (str: string) =>
    startCase(camelCase(str)).replace(/ /g, '');
