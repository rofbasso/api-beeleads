import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUsersUseCase } from "./UpdateUsersUseCase";

class UpdateUsersController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id, name, password, email, phone, sexo, birthday } = request.body;

        const updateUsersUseCase = container.resolve(UpdateUsersUseCase);

        const user = await updateUsersUseCase.execute({ id, name, password, email, phone, sexo, birthday });

        return response.json(user);
    }
}

export { UpdateUsersController };