const express = require('express')
const app = express()
const { generatePdfBase64 } = require('./pdfprinter')
const docDefinition = require('./docDefinition').docDefinition()
const cors = require('cors')

app.use(cors())

app.get('/file', (req, res) => {
    generatePdfBase64(
        docDefinition, 
        readable => {
            res.set({
                "Content-Type": "application/pdf",
                "Transfer-Encoding": "chunked",
                "Connection": "keep-alive"
            });

            readable.pipe(res)
            readable.end()
        })
})


app.listen(5001, () => console.log('server is running on 5001'))
