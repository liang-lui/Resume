const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

const isDev = process.argv.includes('--serve');

async function copyPublicFiles() {
  const publicDir = path.join(__dirname, 'public');
  const distDir = path.join(__dirname, 'dist');

  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  const files = fs.readdirSync(publicDir);
  files.forEach(file => {
    fs.copyFileSync(
      path.join(publicDir, file),
      path.join(distDir, file)
    );
  });
}

async function build() {
  // Copy public files to dist
  await copyPublicFiles();

  const ctx = await esbuild.context({
    entryPoints: ['src/index.jsx'],
    bundle: true,
    minify: !isDev,
    sourcemap: isDev,
    outdir: 'dist',
    loader: {
      '.js': 'jsx',
      '.jsx': 'jsx',
      '.css': 'css',
      '.jpg': 'file',
      '.jpeg': 'file',
      '.png': 'file',
      '.gif': 'file',
      '.svg': 'file',
      '.html': 'copy'
    },
    assetNames: 'assets/[name]-[hash]',
    publicPath: '/',
    define: {
      'process.env.NODE_ENV': isDev ? '"development"' : '"production"'
    },
    plugins: [{
      name: 'watch-public',
      setup(build) {
        build.onEnd(() => {
          copyPublicFiles().catch(console.error);
        });
      },
    }]
  });

  if (isDev) {
    await ctx.serve({
      servedir: 'dist',
      port: 3000,
      host: 'localhost'
    });
    console.log('Server started at http://localhost:3000');
  } else {
    await ctx.rebuild();
    await ctx.dispose();
  }
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
