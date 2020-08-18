import {Request} from 'express'
import * as multer from 'multer'
import multers3 from 'multer-s3'
import {S3} from './AWS'
export function isAuthorazed(req:Request) {
    if(req.headers.authorization){
        
    }
}
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg' ) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}
const multerS3Config = multers3({
    s3: S3,
    bucket: 'meguapark/profileImages',
    acl: 'public-read',
    contentType: function(req,file,cb){
        cb(null, file.mimetype)
    },
    metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
        cb(null, `${Date.now().toString()}`)
    }
});
export const upload = multer({
    storage: multerS3Config,
    fileFilter:fileFilter,

  })
