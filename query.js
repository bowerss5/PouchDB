const PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-find'));

const db = new PouchDB('people');

db.find({
    selector: {
        // Default selector
    },
    fields: ['name.first','name.last','birthday','memberSince','gender']
}).then(result => {
    // Print result to console
    console.log(JSON.stringify(result));
}).catch(error => {
    // Print error
    console.error(error);
});

