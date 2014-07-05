module.exports = {
    options: {
      separator: ';',
    },
    dist: {
      src: ['scripts/calculations.js','scripts/displays.js','scripts/fixtures.js','scripts/pickl.js','scripts/render.js','scripts/save.js'],
      dest: 'dist/pickl.js',
    },
}