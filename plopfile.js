const { componentPlop } = require('./scripts/make-docs-story/plops/component');
const { navPlop } = require('./scripts/make-docs-story/plops/nav');
const {
    updateComponentPlop,
} = require('./scripts/make-docs-story/plops/update-component');
const { corePlop } = require('./scripts/make-docs-story/plops/core');
const {
    updateCorePlop,
} = require('./scripts/make-docs-story/plops/update-core');
const { makeComponentPlop } = require('./scripts/make-component/plop');

const { toolsPlop } = require('./scripts/make-docs-story/plops/tools');
const {
    updateToolsPlop,
} = require('./scripts/make-docs-story/plops/update-tools');

const lowerCase = (text) => {
    return text.toLowerCase();
};

const removePrefix = (text) => {
    return text.replace('vapor-', '');
};

module.exports = (plop) => {
    // generator
    plop.setGenerator('component', componentPlop);

    plop.setGenerator('nav', navPlop);

    plop.setGenerator('update-component', updateComponentPlop);

    plop.setGenerator('core', corePlop);

    plop.setGenerator('update-core', updateCorePlop);

    plop.setGenerator('make-component', makeComponentPlop);

    plop.setGenerator('tools', toolsPlop);

    plop.setGenerator('update-tools', updateToolsPlop);
    // helper
    plop.setHelper('lowerCase', lowerCase);

    plop.setHelper('removePrefix', removePrefix);
};
