import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUsersUseCase } from "./CreateUsersUseCase";

class CreateUsersController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, password, sexo, birthday, email, phone } = request.body;

        const createUsersUseCase = container.resolve(CreateUsersUseCase);

        const user = await createUsersUseCase.execute({
            name,
            password,
            birthday,
            email,
            phone,
            sexo
        });

        return response.status(201).send();
    }
}

export { CreateUsersController };