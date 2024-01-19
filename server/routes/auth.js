import { Router } from "express";   
import { registration, login, getProfile } from "../controllers/authController";

const router = new Router();

// localhost:5000/api/auth/registration

// Registration
router.post('/registration', registration)


// Login
router.post('/login', login)


// Get Profile
router.get('/profile', getProfile)


export default router;
