import { Schema, model } from "mongoose";

interface TaskInterface extends Document {
  task: string,
  required: true
}

const TaskSchema = new Schema({
  task: String
})

export default model<TaskInterface>('List', TaskSchema)