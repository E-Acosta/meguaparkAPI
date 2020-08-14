
import {itsme} from '../Providers/UserProvider'
import express from 'express';
let router = express.Router();

router.get('/me', async function(req, res) {
    await itsme(req, res)
  });
let usersRouter= router

export {usersRouter};