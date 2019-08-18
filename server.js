const express = require('express')
const next = require('next')

const fs = require('fs')
const { Console } = require('console');

const dotenv = require('dotenv');
dotenv.config();

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
// Custom simple logger
const fileLogger = new Console({ stdout: output, stderr: errorOutput });
const logger = new Console({ stdout: process.stdout, stderr: process.stderr });

app.prepare().then(() => {
    const server = express()
    server.use(handle)
    // server.get('*', (req, res) => {
    //   // logger.log(req.protocol)
    //   return handle(req, res)
    // })

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})