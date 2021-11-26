import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IResponseUserDTO } from "../dtos/IResponseUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
    create(date: ICreateUserDTO): Promise<void>;
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
    findAll(): Promise<User[]>;
    delete(id: string): Promise<void>;
}

export { IUsersRepository }