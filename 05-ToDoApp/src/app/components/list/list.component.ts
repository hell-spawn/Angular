import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'
import { TaskList } from 'src/app/models/task-list'
import { TaskListService } from 'src/app/services/task-list.service'
import { AlertController, IonItemSliding, IonList } from '@ionic/angular'

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
    @Input()
    isComplete: boolean
    constructor(
        private router: Router,
        public taskListService: TaskListService,
        private alertController: AlertController
    ) {}

    ngOnInit() {}

    loadTaskList(taskListId: number) {
        if (this.isComplete) {
            this.router.navigateByUrl(`tabs/tab2/add/${taskListId}`)
            return
        }
        this.router.navigateByUrl(`tabs/tab1/add/${taskListId}`)
    }

    deleteTaskList(taskList: TaskList) {
        console.log('TaskList: ', taskList)
        this.taskListService.deleteTaskList(taskList)
    }

    async modifyTaskList(ionList: IonList, taskList: TaskList) {
        console.log('TaskList', taskList)
        const alertNewList = await this.alertController.create({
            header: 'Edit Task List',
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title task list',
                    type: 'text',
                    value: taskList.title,
                },
            ],
            buttons: [
                {
                    text: 'cancel',
                    role: 'cancel',
                    handler: () => {
                        ionList.closeSlidingItems()
                    },
                },
                {
                    text: 'save',
                    handler: (data) => {
                        if (data.length === 0) {
                            return
                        }
                        taskList.title = data.title
                        this.taskListService.saveStorage()
                        ionList.closeSlidingItems()
                    },
                },
            ],
        })

        await alertNewList.present()
    }
}
