// Load in dependencies
var Spritesmith = require('spritesmith');
const fs = require('fs');
const path = require('path');

// Generate our spritesheet
var sprites = ['./loaders/images/1.png', './loaders/images/2.png', './loaders/images/3.png', './loaders/images/4.png'];
Spritesmith.run({src: sprites}, function handleResult (err, result) {
  console.log(result.image); // Buffer representation of image
  console.log(result.coordinates); // Object mapping filename to {x, y, width, height} of image
  console.log(result.properties); // Object with metadata about spritesheet {width, height}
  console.log(__dirname);
  fs.writeFileSync(path.join(__dirname, 'dist/sprite.png'), result.image);
});

// 运行node  test.js