import { Router } from "express";
import TaskController from '../controllers/TaskController';

const routes = Router()

routes.get('/task', TaskController.listTask)
routes.post('/create', TaskController.createTask)
routes.put('/update/:id', TaskController.updateTask)
routes.delete('/delete/:id', TaskController.deleteTask)

export default routes
