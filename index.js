async function getCats() {
    const axios = require('axios');
    var result;

    await axios
        .get('https://cat-fact.herokuapp.com/facts')
        .then((response) => {
            return response
        })
        .then((cats) => {
            result = cats.data;
        })
        .catch((err) => {
            console.log(err)
        });
    return result;
}

async function analyseCats(cats) {
    for (var singleCat in cats) {
        console.log(singleCat.text)
    }
}

module.exports = {
    getCats: async function() {},
    analyseCats: async function(cats) {}
}