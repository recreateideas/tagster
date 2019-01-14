const { log } = require('../../utils/consoleLog');
const {extractJSONfromJS} = require('../../utils/filesUtils');

const testTag = async (filePath) => {
    log('INFO', `${filePath} -> Testing file `);
    const parsedJSON = await extractJSONfromJS(filePath);
    console.log(parsedJSON);
                /*
            handleFIle:
                * Load file     -- DONE
                * Extract json     -- DONE
                * Parse json:
                    * extract domain
                    * extract targets object
                    * extract data:
                        * page match/ exclude
                        * element match/exclude
                        * pattern
                        *
                * build domain site map -> request entry point
                * ( group urls in groups -> regex generator ..? ) 
                * puppeteer:
                    * run in each url
                        * page_match /element_match
                        * test selectors
                        * test pattern
                        * [ ADD LOGIC TO TEST TARGET BEHAVIOUR]
                            * OUTPUT :
                                1- target name
                                2- pattern PASSED / FAILED
                                2- fields PASSED / FAILED 
            */
};


module.exports = {
    testTag
};
