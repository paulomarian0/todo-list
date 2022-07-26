import { Request, Response } from "express";
import Task from "../schemas/Task";

class TaskController {

  public async listTask(req: Request, res: Response): Promise<Response> {
    try {
      const task = await Task.find()
      return res.status(200).json(task)
    } catch (err) {
     return res.status(500).json({ message: "Error" })
    }
  }

  public async createTask(req: Request, res: Response): Promise<Response> {
    try {
      const task = await Task.create(req.body)
      return res.status(200).json(task)
    } catch (err) {
     return res.status(500).json({ message: "Error" })
    }
  }

  public async updateTask(req: Request, res: Response): Promise<Response> {
    try {
      const task = await Task.findByIdAndUpdate((req.params.id), req.body)
      return res.status(200).json(task)
    } catch (err) {
     return res.status(500).json({ message: "Error" })
    }
  }

  public async deleteTask(req: Request, res: Response): Promise<Response> {
    try {
      const task = await Task.findByIdAndDelete(req.params.id)
      return res.status(200).json(task)
    } catch (err) {
     return res.status(500).json({ message: "Error" })
    }
  }
}

export default new TaskController()