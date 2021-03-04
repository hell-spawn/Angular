import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./list/list.component";
import { PipesModule } from "../pipes/pipes.module";

@NgModule({
  declarations: [ListComponent],
  exports: [ListComponent],
  imports: [CommonModule, PipesModule],
})
export class ComponentsModule {}
