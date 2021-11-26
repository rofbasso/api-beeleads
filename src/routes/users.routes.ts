import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateUsersController } from '../modules/users/useCases/createUser/CreateUsersController';
import { DeleteUsersController } from '../modules/users/useCases/deleteUser/DeleteUsersController';
import { ListUsersController } from '../modules/users/useCases/listUser/ListUsersController';
import { UpdateUsersController } from '../modules/users/useCases/updateUser/UpdateUsersController';

const usersRouter = Router();

const createUsersController = new CreateUsersController();
const listUsersController = new ListUsersController();
const updateUsersController = new UpdateUsersController();
const deleteUsersController = new DeleteUsersController();

usersRouter.post("/", createUsersController.handle);
usersRouter.get("/list", ensureAuthenticated, listUsersController.handle);
usersRouter.put("/update", ensureAuthenticated, updateUsersController.handle);
usersRouter.delete("/delete", ensureAuthenticated, deleteUsersController.handle);

export { usersRouter };