# Voxel Painter Core

**Work In Progress**

Extracted from [Voxel Painter](https://github.com/maxogden/voxel-painter) by [Max Ogden](https://github.com/maxogden). The goal is to make it a base module decoupled from any DOM so it can be used anywhere, and in the future add a way to create add-ons to extend or add some features.

# Installation

Install with npm

    npm install voxel-painter-core --save

# Usage


    var voxelPainter = require('voxel-painter-core')

    // Colors to use
    var colors = ['2ECC71', '3498DB', '34495E', 'E67E22', 'ECF0F1']

    // Options
    var options = {
        colors: colors,
        container: '#studio-container'
    }

    var painter = voxelPainter(options)

# License

BSD
