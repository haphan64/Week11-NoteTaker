const fs = require("fs");
const path = require("path");
const util = require("util");

const {v1: uuidv1} = require("uuid");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const dbpath = path.join(__dirname, "../db/db.json");

class Store {

    read() {

        return readFileAsync (dbpath, "utf8");  

    };

    write(content) {

        return writeFileAsync (dbpath, content);

    };

    getNotes() {

        return this.read().then((data) => {

            return data

                ? JSON.parse(data)

                : [];

        });

    };

    saveNotes (notes) {

        return this.write(JSON.stringify(notes));

    }

    addNotes(note) {

        return this
            .getNotes()
            .then ((notes) => {
               
                const newNote = { ...note, id: uuidv1()};

                notes.push(newNote);                              
                
                return this.saveNotes(notes).then(() => newNote);

            });

    };

    deleteNotes() {


        
    };

};

module.exports = new Store;