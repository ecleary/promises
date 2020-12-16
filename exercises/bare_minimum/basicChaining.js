/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var utilityOne = require('./promiseConstructor');
var utilityTwo = require('./promisification');


var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return utilityOne.pluckFirstLineFromFileAsync(readFilePath)
    .then((username) => {
      return utilityTwo.getGitHubProfileAsync(username).then((gitHubJson) => {
        return new Promise ((resolve, reject) => {
          let gitHubJsonString = JSON.stringify(gitHubJson);
          fs.writeFile(writeFilePath, gitHubJsonString, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          });
        });
      });
    });
};





// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
