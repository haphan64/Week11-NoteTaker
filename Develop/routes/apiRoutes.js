const router = require("express").Router();
const store = require("./../db/store");


router.get("/notes", (req, res) => {    

    store.getNotes().then((notes) => {

        res.json(notes);

    });

});

router.post("/notes", (req, res) => {  

    store
        .addNotes(req.body)
        .then((note) => {

            res.json(note);

        });
       
});

router.delete("/notes/:id", (req, res) => {

    console.log("DELETE notes")

});

module.exports = router;
