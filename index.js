async function getCats() {
    const axios = require('axios');
    var result;

    await axios
        .get('https://cat-fact.herokuapp.com/facts')
        .then((response) => {
            return response
        })
        .then((cats) => {
            console.log(cats);
            result = cats.data;
        })
        .catch((err) => {
            console.log('ERROR 2')
            console.log(err)
        });
    return result;
}

async function analyseCats(cats) {
    console.log('Analysing kitties...')
    for (var singleCat in cats) {
        console.log(singleCat.text)
    }
}

module.exports = {
    getCats: async function() {},
    analyseCats: async function(cats) {}
}