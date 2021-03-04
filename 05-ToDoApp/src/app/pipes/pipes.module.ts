import { NgModule } from "@angular/core";
import { FilterTaskListPipe } from "./filter-task-list.pipe";

@NgModule({
  declarations: [FilterTaskListPipe],
  exports: [FilterTaskListPipe],
})
export class PipesModule {}
