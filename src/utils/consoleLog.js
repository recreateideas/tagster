
const logDate = () => {
    const date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ampm;
    return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() + " " + strTime;
};

module.exports = {

    printConsole: (port, httpsPort) => {
        console.log('Tangster - tag tester');
    },

    log: (level,string) => {
        return console.log(`@@@ [${level}] :: ${logDate()} -> ${string}`);
    },
};
