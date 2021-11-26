import { inject, injectable } from "tsyringe";
import { IResponseUserDTO } from "../../dtos/IResponseUserDTO";
import { User } from "../../entities/User";
import { UserMap } from "../../mapper/UserMap";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class ListUsersUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
    ) {}

    async execute(): Promise<IResponseUserDTO[]> {
        const users = await this.usersRepository.findAll();

        const responseUsers: IResponseUserDTO[] = [];

        for (let i = 0; i < users.length; i++) {
            responseUsers.push(UserMap.toDTO(users[i]));
        }

        return responseUsers;
    }
}

export { ListUsersUseCase }