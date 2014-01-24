# Voxel Painter Core

**Work In Progress**

Extracted from [Voxel Painter](https://github.com/maxogden/voxel-painter) by [Max Ogden](https://github.com/maxogden). The goal is to make it a base module decoupled from any DOM so it can be used anywhere, and in the future add a way to create add-ons to extend or add some features.

## Installation

Install with npm

    npm install voxel-painter-core --save

## Basic Usage

Use [Browserify](http://browserify.org/) to bundle your code:

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



    var voxelPainter = require('voxel-painter-core')

    // Colors to use
    var colors = ['2ECC71', '3498DB', '34495E', 'E67E22', 'ECF0F1']

    // Options
    var options = {
        colors: colors,
        container: '#container'
    }

    var painter = voxelPainter(options)

## Methods

### Add Color

Add a color to the available colors

    painter.addColor('#f00')

You can see the colors that are available with `painter.colors`

### Set color

Set the color of the painter to the given index

    painter.setColor(4)

Return `false` is the index does not exist

## License

BSD
