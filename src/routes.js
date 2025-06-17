import { Router } from 'express';
import { login, registration, updateAdmin } from './controller/auth.js';
import { addResearch, fetchResearch, fetchResearchByid, updateResearch, deleteResearch } from './controller/researchPaper.js';
import { addWork, fetchWork, updateWork } from './controller/work.js';
import { addEventActivity, getAllEventActivities } from './controller/events.js';
const router = Router();

router.post('/auth/login', login);
router.post('/auth/register', registration);
router.post('/update-profile',updateAdmin);


// PROJECT
router.post('/add-research-paper',addResearch);
router.get('/fetch-research-paper', fetchResearch);
router.get('/fetch-research-paper/:id', fetchResearchByid);
router.post('/update-research/:researchId', updateResearch);
router.delete('/delete-research/:researchId', deleteResearch);



// WORK
router.post('/add-work', addWork);
router.get('/fetch-work', fetchWork);
router.post('/update-work/:workExperienceId', updateWork);



//event and activties
router.post('/add-event', addEventActivity);
router.get('/fetch-event', getAllEventActivities);


export default router;
