const fs = require('fs');
const path = require('path');
const { findCiqJSON, mergeJSONinJS } = require('../utils/filesUtils');
const { testTag } = require('./service');
const { log } = require('../utils/consoleLog');


const testConnection = (req, res) => {
    log('INFO', 'ping');
    res.status(200).resjson({ fssConnected: "true" });
};

const doesFIleExist = (req, res) => {
    const { filePath } = req.params;
    if (fs.existsSync(filePath)) {
        log('INFO', `file found: ${filePath}`);
        res.status(200).json({ fileExists: 'true' });
    } else {
        log('WARN', `file does not exist: ${filePath}`);
        res.status(404).json({ fileExists: 'false' });
    }
};

const handleFilePath = async (req, res) => {
    const { filePath } = req.params;

    fs.readFile(filePath, async (error, content) => {
        if (error) {
            if (error.code == 'ENOENT') {
                const errorFile = path.join(__dirname, '/utils/errorFile.js');
                log('ERROR', `file not found: ${filePath}`);
                log('', `sending error file: ${errorFile}`);
                res.status(404).sendFile(errorFile);
            }
            else {
                log('ERROR', `internal Server Error`);
                res.status(500).end({ error: `Unexpected error: ${error}` });
            }
        }
        else {
            log('INFO', `${filePath} -> Has accessible content`);
            testTag(filePath);
            res.status(200).sendFile(filePath);
        }
    });

};

const handleUrl = () => {
    console.log('handleUrl');
};

module.exports = {
    handleUrl,
    testConnection,
    doesFIleExist,
    handleFilePath,
};
