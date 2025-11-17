import admin from 'firebase-admin';
import {ENV_CONFIG} from '../env-config.js';

if (ENV_CONFIG?.firebase) {
	admin.initializeApp(ENV_CONFIG.firebase);
}
