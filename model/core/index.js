const { driver } = require('../../config/cf_db')
var session = driver.session();

var session = driver.session();
module.exports = class coreQuery {
    constructor(){
        
    }
    static queryCypher(stringQuery, data) {
        console.log('--------------core')
        console.log(data)
        if(!data){
            const promisResult =  session.run(
                stringQuery
            );
        console.log('--------------1')

        return promisResult;

        }else{
        console.log('--------------2')

            const promisResult =  session.run(
                stringQuery
                ,data
            );
        console.log({promisResult})

        return promisResult;

        }

    };
}