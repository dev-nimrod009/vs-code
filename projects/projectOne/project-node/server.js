const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');
    fs.readFile('C:\\Users\\nimro\\OneDrive\\Documents\\GitHub\\vs-code\\projects\\projectOne\\my-portofolio\\build\\index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        else {

            res.write(data);
            res.end();
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('the server is ready to listen');
});




// const http = require('http');
// const fs = require('fs').promises;
// const path = require('path');

// const buildPath = 'C:\\Users\\nimro\\OneDrive\\Documents\\GitHub\\vs-code\\projects\\projectOne\\my-portofolio\\build';

// const server = http.createServer(async (req, res) => {
//     console.log(req.url, req.method);

//     let filePath = req.url === '/'
//         ? path.join(buildPath, 'index.html')
//         : path.join(buildPath, req.url);

//     // Prevent directory traversal attacks
//     if (!filePath.startsWith(buildPath)) {
//         res.statusCode = 403;
//         res.end('Forbidden');
//         return;
//     }

//     // Set content type based on file extension
//     let ext = path.extname(filePath);
//     let contentType = 'text/html';
//     if (ext === '.js') contentType = 'application/javascript';
//     else if (ext === '.css') contentType = 'text/css';
//     else if (ext === '.json') contentType = 'application/json';
//     else if (ext === '.ico') contentType = 'image/x-icon';
//     else if (ext === '.png') contentType = 'image/png';

//     res.setHeader('Content-Type', contentType);

//     try {
//         const data = await fs.readFile(filePath);
//         res.end(data);
//     } catch (err) {
//         // If file not found, serve index.html for client-side routing
//         if (req.url !== '/') {
//             try {
//                 const data2 = await fs.readFile(path.join(buildPath, 'index.html'));
//                 res.setHeader('Content-Type', 'text/html');
//                 res.end(data2);
//             } catch (err2) {
//                 res.statusCode = 404;
//                 res.end('Not found');
//             }
//         } else {
//             res.statusCode = 404;
//             res.end('Not found');
//         }
//     }
// });

// server.listen(3000, 'localhost', () => {
//     console.log('the server is ready to listen');
// });