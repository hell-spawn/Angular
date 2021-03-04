import { Component } from "@angular/core";
import { TaskListService } from "src/app/services/task-list.service";
import { TaskList } from "src/app/models/task-list";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  public taskListToDo: TaskList[] = [];
  constructor(
    private router: Router,
    public taskListService: TaskListService,
    private alertController: AlertController
  ) {
    this.taskListToDo = taskListService.loadStorage();
  }

  async addTaskList() {
    const alertNewList = await this.alertController.create({
      header: "New Task List",
      inputs: [{ name: "title", placeholder: "Title task list", type: "text" }],
      buttons: [
        {
          text: "cancel",
          role: "cancel",
        },
        {
          text: "add",
          handler: (data) => {
            const taskListId = this.taskListService.addTaskList(data.title);
            this.router.navigateByUrl(`tabs/tab1/add/${taskListId}`);
          },
        },
      ],
    });

    await alertNewList.present();
  }
}
