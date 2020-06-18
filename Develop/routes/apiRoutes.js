const router = require("express").Router();
const store = require("./../db/store");


router.get("/notes", (req, res) => {

    // console.log("READ notes")

    store.getNotes().then((notes) => {

        res.json(notes);

    });

});

router.post("/notes", (req, res) => {

    // console.log("CREATE notes")  

    // store.addNotes(req.body).then(() => {

    //     res.json(note);

    // });

    store.getNotes().then((notes) => {

        console.log("Current Item");
        console.log(notes);

        console.log("New item to add");
        console.log (req.body);

        res.end;

    });


   
});

router.delete("/notes/:id", (req, res) => {

    console.log("DELETE notes")

});

module.exports = router;
