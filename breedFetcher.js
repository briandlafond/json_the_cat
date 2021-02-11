const request = require('request');


const fetchBreedDescription = function(breedName, callback) {

    // string interpolation in the URL allows the users input to be injected into the url
    request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
        if (error) {
            console.log('error message');
            return;
        }
        const data = JSON.parse(body);
        console.log(data);
    });

};

module.exports = { fetchBreedDescription };