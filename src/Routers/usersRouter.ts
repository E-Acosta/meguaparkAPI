
import {itsme} from '../Providers/UserProvider'
import express from 'express';
let router = express.Router();

router.get('/me', function(req, res) {
    itsme(req, res)
  });
let usersRouter= router

export {usersRouter};