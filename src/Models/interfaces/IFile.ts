export interface IFile {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    size: number;
    bucket: string;
    key: string;
    acl: string;
    contentType: string;
    contentDisposition?: any;
    storageClass: string;
    serverSideEncryption?: any;
    metadata: Metadata;
    location: string;
    etag: string;
    versionId?: undefined;
  }
  export interface File extends Express.Multer.File {
    bucket: string;
    key: string;
    acl: string;
    contentType: string;
    contentDisposition: null;
    storageClass: string;
    serverSideEncryption: null;
    metadata: any;
    location: string;
    etag: string;
}
  interface Metadata {
    fieldName: string;
  }