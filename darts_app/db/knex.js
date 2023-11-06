const environment = "development";
const config = require("../.gitignore/knexfile.js")[environment];
const knex = require("knex")(config);
module.exports = knex;