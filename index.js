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