import { IUser } from '../Models/interfaces';
export async function saveUser(userModel:IUser){
        return await userModel.save()
        .then(()=>{
            return {
                error: false,
                data: {
                  message: "User Registered",
                },
              };
        }).catch((error)=>{
            console.dir(error);
            return {
              error: true,
              data: {
                message: `${error}`,
              },
            };
        })
        
      
    // try {
    //     const mongoResult = await userModel.save();
    //     if (mongoResult) {
    //       return {
    //         error: false,
    //         data: {
    //           message: "User Registered",
    //         },
    //       };
    //     }
    //   } catch (error) {
    //     console.dir(error);
    //     return {
    //       error: true,
    //       data: {
    //         message: `EMAIL DUPLICADO`,
    //       },
    //     };
    //   }
}