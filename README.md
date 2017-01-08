# jgf2gml

*Convert JSON Graph Format (JGF) files to Graph Modelling Language (GML)*

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![NPM version](https://badge.fury.io/js/badge-list.svg)](https://www.npmjs.com/package/jgf2gml)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

`jgf2gml` is a simple nodejs command line utility to convert a [JSON Graph Format](http://jsongraphformat.info/)
file into [Graph Modelling Language](https://en.wikipedia.org/wiki/Graph_Modelling_Language) format. 

## Installation

```sh
npm install -g jgf2gml
```

## Usage

```sh
$ jgf2gml -o output.gml input.json
```

## Help

```sh
$ jgf2gml --help

  Usage: jgf2gml [options] <input.json>

  Convert a JSON Graph Format file to a Graph Modelling Language file.

  Options:

    -h, --help            output usage information
    -V, --version         output the version number
    -a, --appendId        Append the node id to the node label
    -o, --outFile <file>  output .gml file
```