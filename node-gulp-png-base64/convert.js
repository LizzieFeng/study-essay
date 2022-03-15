    const fs = require('fs');
    const util = require('util');

    const readFilePr = util.promisify(fs.readFile);

    async function getFileAsync(filename) {
        const contents = await readFilePr(filename);
        const imageBase64 = contents.toString("base64");
        const imagePrefix = "data:image/png;base64,";
        const str = imagePrefix + imageBase64;
        return str;
    }

    // getFileAsync('./dist/compress/images/000000_img_hover.png');


    fs.readdir('./dist/compress/images', async (err, filesArr) => {
        let resultJson = {};
        for (let fileName of filesArr) {
            const jsonKey = fileName.split('.')[0];
            const str = await getFileAsync('./dist/compress/images/'+fileName);
            resultJson[jsonKey] = str;
        }
        const converJson = {
            "icons": resultJson,
        }
        const str = JSON.stringify(converJson, '', '\t');
        fs.writeFile('convert.json', str, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    });



