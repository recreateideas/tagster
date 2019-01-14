require('./src');
const axios = require('axios');

const testTag = encodeURIComponent('/Users/claudio/Documents/ciq/Prod3_Repo/store_BASEdev.js');

axios.post(`http://localhost:5011/tag/${testTag}`).then((res) => {
    console.log(res.status, res.statusText);
});
