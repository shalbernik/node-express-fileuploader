var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    console.log('test----->')
});

router.post('/upload', function (req, res) {
    if (Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    console.log('List of files ----->');
    console.log(req.files);
    let sampleFile = req.files.undefined;
    console.log('[STEP 2] Controller handling');
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv('./files/filename.jpg', function (err) {
        if (err)
            return res.status(500).send(err);
        console.log('[STEP 3] File saved');
        // Response
        setTimeout(() => {
            res.json({
                employment: [
                    {
                        employerName: "Vasyan Industry",
                        title: "Director tvoegoo4ka",
                        startDate: "2019-05-13T11:33:14.451Z",
                        endDate: "2019-05-13T11:33:14.451Z"
                    },
                    {
                        employerName: "105 Dvor Inc",
                        title: "Pacany Strelayt v YPOR",
                        startDate: "2019-05-13T11:33:14.451Z",
                        endDate: "2019-05-13T11:33:14.451Z"
                    }
                ],
                bio: "Lorem impsum epta"
            });
        }, 5000);

    });
});

module.exports = router;
