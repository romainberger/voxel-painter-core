# Voxel Painter Core

**Work In Progress**

Extracted from [Voxel Painter](https://github.com/maxogden/voxel-painter) by [Max Ogden](https://github.com/maxogden). The goal is to make it a base module decoupled from any DOM so it can be used anywhere, and in the future add a way to create add-ons to extend or add some features.

[![NPM](https://nodei.co/npm/voxel-painter-core.png)](https://nodei.co/npm/voxel-painter-core/)

## Installation

Install with npm

    npm install voxel-painter-core --save

## Basic Usage

Use [Browserify](http://browserify.org/) to bundle your code:

```html
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <style>
        #voxel-painter {
            height: 1000px;
        }
    </style>
</head>
<body>
    <div id="voxel-painter"></div>
    <script src="bundle.js"></script>
</body>
</html>
```

```javascript
var voxelPainter = require('voxel-painter-core')

// Options
var options = {
    container: '#voxel-painter'
}

var painter = voxelPainter(options)
```

For a working example check out the [example directory](https://github.com/romainberger/voxel-painter-core/tree/master/example).

## Methods

### Set color

Set the color of the painter

    painter.setColor('#F15501')

To get the currently used color: `painter.color()`

### Show / hide grid

    painter.showGrid(boolean)

### Set wireframe

    painter.setWireframe(boolean)

## Plugins

Informations to write plugins can be found in [Plugins.md](https://github.com/romainberger/voxel-painter-core/tree/master/Plugins.md)

## License

BSD
