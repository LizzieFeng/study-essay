const symbol = require('./convert.json');
const icons = symbol.icons;
const keys = Object.keys(icons);
const nkeys = [];
keys.forEach((item) => {
    if(icons[item].startsWith('data:image/png;base64,')) {
        nkeys.push(item);
    }
});
console.log(nkeys.length);

const fs = require('fs');

for(let i of nkeys) {
    const path = './revetpng/'+ i +'.png';
    const base64 = icons[i].replace(/^data:image\/\w+;base64,/, "");//去掉图片base64码前面部分data:image/png;base64
    const dataBuffer = new Buffer(base64, 'base64'); //把base64码转成buffer对象，
    fs.writeFile(path, dataBuffer, function(err){//用fs写入文件
        if(err){
            console.log(err);
        }else{
            console.log('写入成功！');
        }
    })    
}