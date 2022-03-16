import { NgModule } from '@angular/core';
import { CommonModule, NgIfContext } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HorizontalBarGraphComponent } from './horizontal-bar-graph/horizontal-bar-graph.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [NavbarComponent, HorizontalBarGraphComponent],
  exports: [NavbarComponent, HorizontalBarGraphComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxChartsModule,
  ],
})
export class ComponentsModule {}
