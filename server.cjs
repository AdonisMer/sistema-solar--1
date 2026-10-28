'use strict';
const http = require('node:http');
const path = require('node:path');
const fs = require('node:fs');
const publicRoot = path.resolve(__dirname, 'dist');
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon',
  '.woff': 'font/woff', '.woff2': 'font/woff2'
};
function fail(response, status, message, method) {
  response.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8', 'X-Content-Type-Options': 'nosniff' });
  response.end(method === 'HEAD' ? undefined : message);
}
const server = http.createServer((request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.setHeader('Allow', 'GET, HEAD');
    fail(response, 405, 'Método no permitido.', request.method); return;
  }
  let pathname;
  try { pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname); }
  catch { fail(response, 400, 'Solicitud no válida.', request.method); return; }
  if (pathname === '/') pathname = '/index.html';
  if (pathname.includes('\\') || pathname.includes('\0') || pathname.split('/').some(part => part.startsWith('.'))) {
    fail(response, 404, 'Archivo no encontrado.', request.method); return;
  }
  const filename = path.resolve(publicRoot, '.' + pathname);
  if (!filename.startsWith(publicRoot + path.sep)) { fail(response, 404, 'Archivo no encontrado.', request.method); return; }
  fs.stat(filename, (error, info) => {
    if (error || !info.isFile()) { fail(response, 404, 'Archivo no encontrado.', request.method); return; }
    response.writeHead(200, {
      'Content-Type': mimeTypes[path.extname(filename).toLowerCase()] || 'application/octet-stream',
      'Content-Length': info.size,
      'Cache-Control': pathname.startsWith('/assets/') ? 'public, max-age=31536000, immutable' : 'no-cache',
      'X-Content-Type-Options': 'nosniff'
    });
    if (request.method === 'HEAD') { response.end(); return; }
    const stream = fs.createReadStream(filename);
    stream.on('error', () => response.destroy());
    response.on('close', () => stream.destroy());
    stream.pipe(response);
  });
});
if (require.main === module) {
  if (!fs.existsSync(path.join(publicRoot, 'index.html'))) {
    console.error('Falta dist/index.html. Ejecuta npm run build antes de iniciar.'); process.exit(1);
  }
  const port = Number(process.env.PORT || 8080);
  server.listen(port, '0.0.0.0', () => console.log(`Sistema Solar disponible en el puerto ${port}`));
}
module.exports = { server };