// export const uploadImageUser = (imageName: string, path: string): Promise<string> => {
//     return new Promise<string>(async (resolve, reject) => {
//         try {
//             await S3.upload(
//                 {
//                     Key: `${process.env.NODE_ENV}/images/users/${imageName}`,
//                     Bucket: process.env.AWS_S3_BUCKET as string,
//                     Body: readFileSync(path),
//                     ContentType: `image/${path.split('.')[1]}`,
//                     ACL: "public-read"
//                 },
//                 {
//                     tags: [
//                         { Key: Date.now().toString(), Value: `images/users/${imageName}` }
//                     ]
//                 }
//             )
//                 .promise()
//             resolve(`images/users/${imageName}`)
//         } catch (error) {
//             reject(error)
//         }
//     })
// }

// private update = async (Request: Request, Response: Response, Next: NextFunction) => {
//     try {

//         let { user, country }: { user: IUsers, country: ICountry } = Request.body
//         const { user: update_user }: { user: TUser } = Request.body.app

//         resolveMx(update_user.email.split('@')[1], (error, MX) => {
//             if (error) throw new Error(error.message)
//             if (MX.length == 0) throw new Error('EMAIL_NOT_VALID')
//         })

//         update_user.country = country._id
//         Request.body.message = "SECURE_USER_UPDATED"

//         if (!isUndefined(update_user.image) && update_user.image !== '') {
//             let path = this.capture(`${update_user.image}`, user._id)
//             update_user.image = await uploadImageUser(user._id, path)
//         }

//         let update = await UserEntity.updateOne({ _id: user._id }, update_user)
//         if (!isUndefined(update.ok) && update.ok == 1) Next()
//         else throw new Error("NO_UPDATED_USER")

//     } catch (error) {
//         ErrorRequest(Response, error)
//     }
// }

