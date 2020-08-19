import {S3} from './AWS'
import * as multers3 from 'multer-s3'
import * as multer from 'multer';

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
        cb(null, `${Date.now().toString()}.${file.mimetype.replace("image/","")}`)
    }
});
export const fileUploadOptions = multer({
    storage: multerS3Config,

});