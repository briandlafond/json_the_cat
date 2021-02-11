const { fetchBreedDescription } = require('./breedFetcher');

//allows data entry from command line, [2] eliminates the respone from terminal to only display breed name
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
    if (error) {
        console.log('Error fetch details:', error);
    } else {
        console.log(desc);
    }
});