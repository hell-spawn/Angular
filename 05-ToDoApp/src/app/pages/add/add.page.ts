import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TaskListService } from "src/app/services/task-list.service";
import { TaskList } from "src/app/models/task-list";
import { TaskItem } from "src/app/models/task-item";

@Component({
  selector: "app-add",
  templateUrl: "./add.page.html",
  styleUrls: ["./add.page.scss"],
})
export class AddPage implements OnInit {
  public taskList: TaskList;
  public taskItemDescription: string = "";
  constructor(
    private route: ActivatedRoute,
    private taskListService: TaskListService
  ) {
    const taskListId = route.snapshot.paramMap.get("taskListId");
    this.taskList = taskListService.findTaskList(Number(taskListId));
  }

  ngOnInit() {}

  addTaskItem() {
    if (this.taskItemDescription.length === 0) return;
    const taskItem = new TaskItem(this.taskItemDescription);
    this.taskList.listTaskItems.push(taskItem);
    this.taskListService.saveStorage();
    this.taskItemDescription = "";
  }

  updateTaskItem() {
    const pendingTasks = this.taskList.listTaskItems.filter(
      (taskItem) => !taskItem.completed
    ).length;

    if (pendingTasks === 0) {
      this.taskList.completedDate = new Date();
      this.taskList.completed = true;
    } else {
      this.taskList.completedDate = null;
      this.taskList.completed = false;
    }
    this.taskListService.saveStorage();
  }

  deleteTaskItem(index: number) {
    this.taskList.listTaskItems.splice(index, 1);
    this.taskListService.saveStorage();
  }
}
