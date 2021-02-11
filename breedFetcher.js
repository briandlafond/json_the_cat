const request = require('request');

let breedName = process.argv[2]; //allows data entry from command line, [2] eliminates the respone from terminal to only display breed name

console.log(breedName); // logs given breed name 

// string interpolation in the URL allows the users input to be injected into the url
request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    if (error) {
        console.log('error message');
        return;
    }
    const data = JSON.parse(body);
    console.log(data);
});