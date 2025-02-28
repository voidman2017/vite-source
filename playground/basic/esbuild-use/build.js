const esbuild = require('esbuild')

async function build() {
  const contextEsm = await esbuild.context({
    entryPoints: ['lodash-es'],
    bundle: true,
    outdir: 'dist-esm',
    format: 'esm',
  })
  await contextEsm.rebuild()

  const contextCjs = await esbuild.context({
    entryPoints: ['lodash-es'],
    bundle: true,
    outdir: 'dist-cjs',
    format: 'cjs',
  })
  await contextCjs.rebuild()
}

build()
