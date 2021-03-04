import { Pipe, PipeTransform } from "@angular/core";
import { TaskList } from "../models/task-list";

@Pipe({
  name: "filterTaskList",
  pure: false,
})
export class FilterTaskListPipe implements PipeTransform {
  transform(value: TaskList[], isComplete: boolean): TaskList[] {
    return value.filter((taskList) => taskList.completed === isComplete);
  }
}
