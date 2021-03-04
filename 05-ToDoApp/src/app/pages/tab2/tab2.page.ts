import { Component, Input } from "@angular/core";
import { TaskListService } from "src/app/services/task-list.service";
import { TaskList } from "src/app/models/task-list";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  public doneTaskList: TaskList[];

  constructor(public tastListService: TaskListService) {
    this.doneTaskList = this.tastListService.loadStorage();
  }
}
