module.exports = async function getCats() {
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

module.exports = async function analyseCats(cats) {
    for (var singleCat in cats) {
        console.log(singleCat.text)
    }
}