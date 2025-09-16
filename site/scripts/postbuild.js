const fs = require('node:fs');
const path = require('node:path');

const root = process.cwd();
const outDir = path.join(root, 'out');
const cnameSrc = path.join(root, '..', 'CNAME');
const cnameDst = path.join(outDir, 'CNAME');

try {
  if (fs.existsSync(cnameSrc)) {
    fs.copyFileSync(cnameSrc, cnameDst);
    console.log('CNAME copied to out/.');
  }
} catch (e) {
  console.warn('Postbuild step failed:', e.message);
}


