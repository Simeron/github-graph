    const rest = require('restler');
    const CommitModel = require("../models/commit");
    // const UserInfo = require("UserInfo");
    
    class FetchCommits {
        static doFetchCommits(commits){
           
        //This is how we define a new method(or function) that will return a Promise. Remember that in Objects or Classes functions are called methods.
        //It has 2 callback functions, resolve and reject. Resolve states that the thing has succeeded and we can pass some data back IF WE WANT TO, its not compulsory
        //Reject tells the promise that something failed, again we should send the error back up the chain so it can be fed back to the user, but its not required.
        return new Promise(
            (resolve, reject) => {
                let options = {
                    username: process.env.GIT_USERNAME,
                    password: process.env.GIT_PWD
                }
                
                commits = commits.replace("{/sha}", "");
                 console.log(`Commit URL ${commits}`);
                //This is the restler NPM module that we included above. You can find the docs online for all the various options and methods available inside of it.
                rest.get(commits,options).on('complete', function(result) {
                    if (result instanceof Error) {
                        console.log('Error:', result.message);
                        reject(result);
                    } else {
                        let newArray = [];
                        for (let i in result){
                            try {
                                let newObj = new CommitModel(result[i]);
                                newArray.push(newObj);
                            } catch (e){
                                console.log(e.message);
                            }
                        }
                        resolve(newArray);
                    }
                });
            }
        )
    }
}

module.exports = FetchCommits;

