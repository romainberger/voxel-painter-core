var voxelPainter = require('./../')

// Options
var options = {
    container: '#container'
}

var painter = voxelPainter(options)

var loopThrough = function(elements, cb) {
  [].forEach.call(elements, function(item) {
    cb(item)
  })
}

// Color selector
var colorSelector = document.querySelectorAll('.color-selector li')

loopThrough(colorSelector, function(color) {
  color.addEventListener('click', function() {
    painter.setColor(this.getAttribute('data-color'))

    loopThrough(colorSelector, function(item) {
      item.className = ''
    })

    this.className = 'selected'
  }, false)
})
