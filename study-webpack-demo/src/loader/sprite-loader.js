var Spritesmith = require('spritesmith');
const fs = require('fs');
const path = require('path');

module.exports = function (source) {
    // console.log('source', source);
    const callback = this.async();
    const imgs = source.match(/url\((\S*)\?__sprite/g);
    // console.log('imgs',imgs);
    const matchedImgs = [];
    for (let i = 0; i < imgs.length; i++) {
        // console.log('imgs[i]', i,imgs[i]);
        const img = imgs[i].match(/url\((\S*)\?__sprite/)[1]; // 拿到捕获组的数据
        // console.log('img', img);
        matchedImgs.push(path.join(__dirname, img));
    }
    // console.log('matchedImgs', matchedImgs);
    Spritesmith.run(
        {
            src: matchedImgs
        },
        (err, result) => {
            console.log('error, result:',  err, result);
            console.log("process.cwd:", process.cwd());
            fs.writeFileSync(path.join(process.cwd(), 'dist/sprite.png'), result.image);
            source = source.replace(/url\((\S*)\?__sprite\);/g, (match) => {
                return `url("dist/sprite.png");background-position: 24px 24px;`;
            });
            console.log('source', source);
            fs.writeFileSync(path.join(process.cwd(), 'dist/index.css'), source);
            // callback(null, source);
        }
    );
}