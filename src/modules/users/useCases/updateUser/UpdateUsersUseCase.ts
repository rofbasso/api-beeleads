import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IResponseUserDTO } from "../../dtos/IResponseUserDTO";
import { UserMap } from "../../mapper/UserMap";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    id: string;
    name?: string;
    password?: string;
    email?: string;
    phone?: string;
    sexo?: string;
    birthday?: Date;
}

@injectable()
class UpdateUsersUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ id, name, password, email, phone, sexo, birthday }: IRequest): Promise<IResponseUserDTO> {
        const user = await this.usersRepository.findById(id);

        if (!user) {
            throw new AppError("User not found!");
        }

        const updateUser = {
            id,
            name: name != null ? name : user.name,
            password: password != null ? await hash(password, 8) : user.password,
            email: email != null ? email : user.email,
            phone: phone != null ? phone : user.phone,
            sexo: sexo != null ? sexo : user.sexo,
            birthday: birthday != null ? birthday : user.birthday,
            updated_at: new Date(),
        }

        await this.usersRepository.create(updateUser);

        return UserMap.toDTO(updateUser);
    }
}

export { UpdateUsersUseCase }