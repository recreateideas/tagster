const { handleUrl, handleFilePath } = require('./controllers');

module.exports = (app) =>{

    app.post('/', handleUrl);

    app.post('/tag/:filePath', handleFilePath);

};
