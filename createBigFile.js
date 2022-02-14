const fs = require('fs')

for (let i = 0; i < 1e5; i++) {
    fs.writeFileSync(
        'bigfile1e5.txt',
        `Here is a line number ${i+1}`,
        { flag: 'a' }
    )
}



