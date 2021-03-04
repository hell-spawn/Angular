import { TaskItem } from "./task-item";

export class TaskList {
  public id: number;
  public title: string;
  public CreationDate: Date;
  public completedDate: Date;
  public completed: boolean;
  public listTaskItems: TaskItem[];

  constructor(title: string) {
    this.title = title;
    this.CreationDate = new Date();
    this.listTaskItems = [];
    this.completed = false;
    this.id = new Date().getTime();
  }
}
