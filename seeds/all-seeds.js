const {All} = require('../models');

const allData = [
    {
        "Album": "The Beatles",
        "Artist": "The Beatles",
        "Year": 1968,
        "Rank": 1
    },
    {
        "Album": "Pet Sounds",
        "Artist": "The Beach Boys",
        "Year": 1966,
        "Rank": 2
    },
    {
        "Album": "Revolver",
        "Artist": "The Beatles",
        "Year": 1966,
        "Rank": 3
    },
    {
        "Album": "Highway 61 Revisited",
        "Artist": "Bob Dylan",
        "Year": 1965,
        "Rank": 4
    },
    {
        "Album": "Rubber Soul",
        "Artist": "The Beatles",
        "Year": 1965,
        "Rank": 5
    },
];
console.log(All);
const seedAll = () => All.bulkCreate(allData);

module.exports = seedAll;
