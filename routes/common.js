var express = require('express');
var router = express.Router();

var restoredData = {
    stepId: 'HourlyRate',
    personalInfo: {
        firstName: 'TestUserName',
        lastName: 'TesLasttUserName',
        email: 'testemail@gmail.com',
        password: 'string',
        selectLanguage: 'pt-PT'
    },
    contactDetail: {
        countryCode: 'CA',
        timezoneId: 61,
        postalCode: '1231231231',
        phoneCountryCode: '123',
        phoneNumber: '45678',
        phoneExtension: '777'
    },
    employmentHistory: {
        employment: [
            {
                employerId: 366779,
                employerName: "EPAM Systems, Inc. [EPAM]",
                title: "Senior Developer",
                startDate: "2016-05-01T11:33:14.451Z",
                endDate: "2018-05-07T11:33:14.451Z"
            },
            {
                employerId: 366779,
                employerName: "EPAM Systems, Inc. [EPAM]",
                title: "Middle Developer",
                startDate: "2018-05-07T11:33:14.451Z",
                endDate: "2019-05-12T11:33:14.451Z"
            },
            {
                employerId: 366779,
                employerName: "EPAM Systems, Inc. [EPAM]",
                title: "Junior Developer",
                startDate: "2019-05-12T11:33:14.451Z",
                endDate: "2019-05-14T11:33:14.451Z"
            }
        ],
        bio: "You could not live with your own failure. And where did that bring you? Back to me."
    },
    relationships: [{
        entityId: 366779,
        entityName: 'Epam',
        relationshipTypeId: '1',
        comment: '',
        startDate: "2019-05-12T11:33:14.451Z",
        endDate: "2019-05-14T11:33:14.451Z",
    },
        {
            entityId: 366779,
            entityName: 'Epam',
            relationshipTypeId: '1',
            comment: '',
            startDate: "2019-05-12T11:33:14.451Z",
            endDate: "2019-05-14T11:33:14.451Z",
        }],
    hourlyRate: {
        hourlyRate: 70,
        termsAndConditionsDate: '01/02/2019'
    },
};
router.get('/', function (req, res, next) {
    console.log('test----->')
});

router.get('/permission/api/v1/registration/:registrantId', function (req, res, next) {
    console.log(`[RESTORE] Registrant ID ==== ${req.params.registrantId}`);
    var registrantId = req.params.registrantId;
    if (registrantId === '3') {
        res.json(restoredData);
    } else {
        //  res.error(`Registrant id doesn't exist!!`);
    }
});

router.post('/upload', function (req, res) {
    if (Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    console.log('List of files ----->');
    console.log(req.files);
    let sampleFile = req.files.undefined;
    console.log('[STEP 2] Controller handling');
    sampleFile.mv('./files/filename.jpg', function (err) {
        if (err) {
            return res.status(500).send(err);
        }
        console.log('[STEP 3] File saved');
        setTimeout(() => {
            res.json(restoredData.employmentHistory);
        }, 5000);

    });
});

module.exports = router;
