export async function saveAnimal(user: User, file: any) {
    if (file) {
      user.image = file.location;
    }
    const userModel = new UserModel(user);
    return await userModel
      .save()
      .then(() => {
        return new ServerResponse(201, "User Registered");
      })
      .catch((error) => {
        console.dir(error);
        return new ServerResponse(500,`${error}`);
      });
  }