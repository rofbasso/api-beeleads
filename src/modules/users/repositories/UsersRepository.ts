import { getRepository, Repository } from 'typeorm';
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IResponseUserDTO } from '../dtos/IResponseUserDTO';
import { User } from '../entities/User';
import { IUsersRepository } from "./IUsersRepository";

class UsersReposiroty implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }
    async create({ name, password, sexo, birthday, email, phone, id, created_at, updated_at }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            password,
            birthday,
            email,
            phone,
            sexo,
            id,
            created_at,
            updated_at
        });

        this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ email });
        return user as User;
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne(id);
        return user as User;
    }

    async findAll(): Promise<User[]> {
        const users = await this.repository.find();
        return users;
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}

export { UsersReposiroty }