const neo4j = require('neo4j-driver');
// const driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('huynhvinh', '123456'));
let driver = neo4j.driver('bolt://localhost:11014/', neo4j.auth.basic('son2', '1'));

// const driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('Dat', '123456'));

module.exports = { driver }

