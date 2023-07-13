const request = require('request');
const fs = require('fs').promises;

// You need to make an http request and wait for the response.
// After the http request is complete, you need to take the data you receive and write it to a file in your local filesystem.

let url = process.argv[2]; //input from terminal
let filePath = process.argv[3];

request(url, (error, response, body) => { //make http request
  if (error) { //if error
    console.error(`Error: ${error}`); //show error message
    return;
  }
  fs.writeFile(filePath, body)
    .then(() => {
      console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`); //logs message
    })
    .catch((error) => {
      console.error(`Error: ${error}`); //show error message
    })
  });

