import { classToClass } from "class-transformer";
import { IResponseUserDTO } from "../dtos/IResponseUserDTO";
import { User } from "../entities/User";

class UserMap {
  static toDTO({
    email,
    name,
    id,
    phone,
    birthday,
    sexo,
    updated_at,
  }: User): IResponseUserDTO {
    const user = classToClass({
      email,
      name,
      id,
      phone,
      birthday,
      sexo,
      updated_at
    });
    return user;
  }
}

export { UserMap };
