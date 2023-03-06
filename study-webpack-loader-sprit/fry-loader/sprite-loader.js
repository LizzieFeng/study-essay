var Spritesmith = require('spritesmith');
const fs = require('fs');
const path = require('path');

module.exports = function (source, map, meta) {
    
    const imgs = source.match(/url\((\S*)\?__sprite/g);
    if(!(imgs && imgs.length)) {
        
        return source;
    }
    const matchedImgs = [];
    for (let i = 0; i < imgs.length; i++) {
        const img = imgs[i].match(/url\((\S*)\?__sprite/)[1]; // 拿到捕获组的数据
        matchedImgs.push(path.join(this.context, img));
    }
    const callback = this.async();
    Spritesmith.run(
        {
            src: matchedImgs
        },
        (err, result) => {
            fs.writeFileSync(path.join(this.context, '/images/sprite.png'), result.image);
            source = source.replace(/url\((\S*)\?__sprite\);/g, (match) => {
                return `url("./images/sprite.png");background-position: 24px 24px;`;
            });
            callback(null, source, map, meta);
        }
    );
    return source;
}