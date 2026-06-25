import { Client } from 'ssh2';
import fs from 'fs';
import path from 'path';
const config = {
  host: '82.197.80.241',
  port: 65002,
  username: 'u676573379',
  password: 'Veer@85886'
};
function getAllFiles(dir, base = dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...getAllFiles(full, base));
    else results.push({ local: full, remote: path.relative(base, full) });
  }
  return results;
}
const conn = new Client();
conn.on('ready', () => {
  console.log('SSH Connected!');
  conn.sftp((err, sftp) => {
    if (err) throw err;
    const files = getAllFiles('./dist');
    console.log('Total files:', files.length);
    let i = 0;
    function next() {
      if (i >= files.length) { console.log('\nAll done!'); conn.end(); return; }
      const f = files[i++];
      const remotePath = 'public_html/' + f.remote.replace(/\\/g, '/');
      const remoteDir = remotePath.substring(0, remotePath.lastIndexOf('/'));
      sftp.mkdir(remoteDir, () => {
        sftp.fastPut(f.local, remotePath, (e) => {
          if (e) console.error('ERR:', f.remote, e.message);
          else process.stdout.write('.');
          next();
        });
      });
    }
    next();
  });
}).connect(config);
