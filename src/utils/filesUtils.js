const fs = require('fs');
const path = require('path');
const { log } = require('./consoleLog');

const extractJSONfromJS = async (fileSource) => {
    const JSONContentPromise = new Promise((resolve, reject) => {
        fs.readFile(fileSource, 'utf8', async (error, fileContent) => {
            if (error) {
                reject(log('ERROR', error));
            }
            const JSONContent = fileContent.replace(/([\s\S]+)(var config_json\s?=\s?\')([\s\S]+)(\'\;[\s\n]+var config_db;)([\s\S]+)/, '$3');
            resolve(JSONContent);
        });
    });
    const JSONContent = await JSONContentPromise.then(json => json);
    return JSON.parse(JSONContent);
};

const normalizeWinPath = (path) => {
    var isWin = process.platform === "win32";
    if (isWin) {
        const dirnameArray = path.split('\\');
        const normalizedArray = dirnameArray.map(level => /&/g.test(level) ? level = `"${level}"` : level);
        const normalizedDirname = normalizedArray.join('\\');
        return normalizedDirname;
    } else return path;

};

module.exports = {
    normalizeWinPath,
    extractJSONfromJS,
};
