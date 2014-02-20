# Plugins

Basic plugin structure:

    var Stream = require('stream')
      , stream = new Stream()
      , numberVoxel = 0

    var voxelCount = function(studio) {
      studio.on('addVoxel', function() {
        numberVoxel++
        stream.emit('addVoxel', numberVoxel)
      })

      return stream
    }

    module.exports = voxelCount
