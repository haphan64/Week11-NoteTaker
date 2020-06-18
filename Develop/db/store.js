const fs = require("fs");
const path = require("path");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);

class Store {

    read() {

        return readFileAsync (path.join(__dirname, "../db/db.json"), "utf8");  

    }

    getNotes() {

        return this.read().then((data) => {

            return data

                ? JSON.parse(data)

                : [];

        });

    };

    addNotes() {

        this
            .getNotes()
            .then ((data) => {

            });

    };

    deleteNotes() {


        
    };

};

module.exports = new Store;