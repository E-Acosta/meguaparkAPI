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
  
  interface Metadata {
    fieldName: string;
  }