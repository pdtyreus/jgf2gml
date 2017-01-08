var Mustache = require('mustache');
var fs = require('fs');

var template = `graph [
        comment "{{comment}}"
        directed {{directed}}
        {{#id}}id {{this}}{{/id}}
        label "{{label}}"
        {{#nodes}}
        node [
                id {{id}}
                label "{{label}}"
                {{#attributes}}
                {{key}} "{{value}}"
                {{/attributes}}
        ]
        {{/nodes}}
        {{#edges}}
        edge [
                source {{source}}
                target {{target}}
                label "{{label}}"
                {{#attributes}}
                {{key}} "{{value}}"
                {{/attributes}}
        ]
        {{/edges}}
]`;

module.exports = function toGml(jgf, options) {
    var opt = options || {};

    var graph = jgf.graph;

    var view = {
        comment: graph.comment,
        directed: (graph.directed ? 1 : 0),
        id: graph.id,
        label: graph.label
    }

    var nodes = [];
    for (var i = 0; i < graph.nodes.length; i++) {
        var jsonNode = graph.nodes[i];
        var gmlNode = {};

        if (jsonNode.metadata) {
            gmlNode.attributes = [];
            for (var key in jsonNode.metadata) {
                gmlNode.attributes.push({ key: key, value: jsonNode.metadata[key] })
            }
        }

        gmlNode.id = jsonNode.id;
        gmlNode.label = jsonNode.label;
        if (opt.appendIdToLabel) {
            gmlNode.label = '['+jsonNode.id+'] '+jsonNode.label;
        }
        nodes.push(gmlNode);
    }

    var edges = [];
    for (var i = 0; i < graph.edges.length; i++) {
        var jsonEdge = graph.edges[i];
        var gmlEdge = {};

        if (jsonEdge.metadata) {
            gmlEdge.attributes = [];
            for (var key in jsonEdge.metadata) {
                gmlEdge.attributes.push({ key: key, value: jsonEdge.metadata[key] })
            }
        }

        gmlEdge.source = jsonEdge.source;
        gmlEdge.target = jsonEdge.target;
        gmlEdge.label = jsonEdge.label;
        edges.push(gmlEdge);
    }

    view.nodes = nodes;
    view.edges = edges;

    return Mustache.render(template, view);
}