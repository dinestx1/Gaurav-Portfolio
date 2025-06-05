const express = require('express');
const authController = require('./controller/auth');
const researchController = require('./controller/researchPaper');
const workController = require('./controller/work');

const router = express.Router();

router.post('/auth/login', authController.login);
router.post('/auth/register', authController.registration);
router.post('/update-profile',authController.updateAdmin);


// PROJECT
router.post('/add-research-paper',researchController.addResearch);
router.get('/fetch-research-paper', researchController.fetchResearch);
router.post('/update-research/:researchId', researchController.updateResearch);
router.delete('/delete-research/:researchId', researchController.deleteResearch);



// WORK
router.post('/add-work', workController.addWork);
router.get('/fetch-work', workController.fetchWork);
router.post('/update-work/:workExperienceId', workController.updateWork);

module.exports = router;
