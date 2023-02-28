const sharp = require('sharp')

sharp('./utiles/js.webp')
    .resize(80)
    .grayscale()
    .toFile('./utiles/jotita-s.png')