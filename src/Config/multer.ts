import {S3} from './AWS'
import * as multers3 from 'multer-s3'
import * as multer from 'multer';

const multerS3Config = (bucket: string)=>{
   return multers3({
        s3: S3,
        bucket: bucket,
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
} 
const multerS3Config3d = (bucket: string)=>{
    return multers3({
         s3: S3,
         bucket: bucket,
         acl: 'public-read',
         contentType: function(req,file,cb){
             cb(null, file.mimetype)
         },
         metadata: function (req, file, cb) {
             cb(null, { fieldName: file.fieldname});
         },
         key: function (req, file, cb) {
             cb(null, `${Date.now().toString()}.glb`)
         }
     });
 } 
export const usersProfileMulterConfig = multer({
    storage:  multerS3Config('meguapark/profileImages'),
});
export const animalsProfileMulterConfig = multer({
    storage:  multerS3Config('meguapark/animalImages'),
});
export const animalsModelMulterConfig = multer({
    storage:  multerS3Config3d('meguapark/3dmodels'),
});