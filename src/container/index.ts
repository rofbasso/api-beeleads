import { container } from "tsyringe";
import { IUsersRepository } from "../modules/users/repositories/IUsersRepository";
import { UsersReposiroty } from "../modules/users/repositories/UsersRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersReposiroty
)