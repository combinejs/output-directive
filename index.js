let Node = require('@combinejs/node');

class OutputDirective {
    constructor(value, node) {
        let child;

        if (value[0] === '"' && value[value.length - 1] === '"') {
            child = new Node('String');
            child.string = value.slice(1, -1);
        } else {
            child = new Node('String');
            child.expression = value.split('.');
        }

        node.addChild(child);
    }
}

module.exports = OutputDirective;

