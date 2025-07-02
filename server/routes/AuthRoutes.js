import express from 'express';
import { checkUsername, getAllUsers, login, register } from '../controllers/AuthControllers.js';
const router=express.Router();
router.post('/register',register);
router.post('/login', login);
// router.post('/logout');
router.get('/check-username/:username',checkUsername);
router.get('/all-users',getAllUsers);
export default router;