const esbuild = require('esbuild')

async function build() {
  const context = await esbuild.context({
    entryPoints: ['src/index.js'],
    bundle: true,
    outfile: 'dist/bundle.js',
  })
  const result = await context.rebuild()

  console.log(result)
}

build()
