const fs = require('fs')

let bigfile = fs.readFileSync('./bigfile.txt', 'utf8');
//let bigfile = fs.readFileSync('./bigfile1e5.txt', 'utf8');

function docDefinition() {
    let content = [{
        text: 'Hello world',
        alignment: 'center',
        fontSize: 25,
        margin: [0,0,0,0]
    }]
    
    content.push({ text: bigfile })

    let docDefinition = {
        header: {
            margin: [0, 20, 0, 0],
            fontSize: 30,
            height: 0,
            alignment: 'center',
            columns: [{
                    with: 'auto',
                    alignment: 'center',
                    text: 'Header'
                }],
        },
        footer: {
            margin: [72, 0, 72, 0],
            fontSize: 10,
            columns: [{
                    with: 'auto',
                    alignment: 'left',
                    text: '© Blogger 2022'
                }

            ],
        },
        content: content,
        pageMargins: [72, 120, 72, 50],
    }

    return docDefinition
}

docDefinition()

module.exports = { docDefinition }

