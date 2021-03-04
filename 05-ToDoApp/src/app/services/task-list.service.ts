import { Injectable } from "@angular/core";
import { TaskList } from "../models/task-list";

@Injectable({
  providedIn: "root",
})
export class TaskListService {
  public taskLists: TaskList[] = [];
  constructor() {
    console.log(">> TaskListService: service started");
    this.loadStorage();
  }

  addTaskList(title: string): number {
    const taskList = new TaskList(title);
    console.log("Add: ", taskList);
    this.taskLists.push(taskList);
    this.saveStorage();
    return taskList.id;
  }

  findTaskList(taskListId: number) {
    return this.taskLists.find((task) => task.id === taskListId);
  }

  saveStorage() {
    localStorage.setItem("data-app", JSON.stringify(this.taskLists));
  }

  loadStorage() {
    if (localStorage.getItem("data-app")) {
      this.taskLists = JSON.parse(localStorage.getItem("data-app"));
    }
    return this.taskLists;
  }

  deleteTaskList(removeTaskList: TaskList) {
    console.log("Service: ", removeTaskList);
    this.taskLists = this.taskLists.filter(
      (taskList) => taskList.id !== removeTaskList.id
    );
    console.log(this.taskLists);
    this.saveStorage();
  }
}
