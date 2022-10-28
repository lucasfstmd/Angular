import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MatTableModule,
    MatCardModule
  ]
})
export class ProjectsModule { }
