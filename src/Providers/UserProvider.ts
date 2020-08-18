import { UserModel, UserStructure } from "../Models";
import { IFile } from "../Models/interfaces/IFile";
import { Request, Response } from "express";
import { validate } from "class-validator";
import { hashSync } from "bcrypt";
const hashSalt: number = 10;
class UserProvider {
  public async registerUser(req: Request, res: Response) {
    let data: UserStructure = new UserStructure(req.body);
    const validateResults = await validate(data);
    //validacion de datos de usario
    if (validateResults.length <= 0) {
      //actualizacion de datos del modelo para guardar
      const imageFile:IFile = req.file as unknown as IFile
      console.dir(imageFile)
      data.password = hashSync(data.password, hashSalt);
      data={...data,...{image:imageFile.location}}
      const user = new UserModel(data);
      try {
        const mongoResult = await user.save()
        if (mongoResult) {
          res.json({
            error: false,
            data: {
              message: "User Registered",
            },
          });
        }
      } catch (error) {
        console.dir(error)
        res.json({
          error: true,
          data: {
            message: `EMAIL DUPLICADO`,
          },
        });
      }
    } else {
      validateResults.forEach((result, i) => {
        console.log(`error ${i}`);
        console.log(result);
      });
      res.json({
        error: true,
        dataError: {
          Message: validateResults[0].toString(),
        },
      });
    }
  }
  public uploadImageUser(req:Request,res:Response){
    console.dir(req.file)
    console.dir(req.body)
    res.json({message:"holi"})

  }
}

export const userProvider = new UserProvider();
