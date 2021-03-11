//const net = require('net');
const fs = require('fs')
const request = require('request')

const URL = process.argv[2]

const path = process.argv[3]

request(URL, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  if((response && response.statusCode) === 200){
  fs.writeFile(path, body, (error)=>{console.log(`Downloaded and saved ${body.length} bytes to ${path}`)})
  }
  else{
    console.log(`The given URL was not a valid address.`)
  }
    
});




