import {Routes , RouterModule} from '@angular/router';
import {AddTaskComponent} from "./add-task/add-task.component";
import {TasksListComponent} from "./tasks-list/tasks-list.component";
import { NgModule } from '@angular/core';


const routes: Routes = [
  { path: 'add-task', component: AddTaskComponent },
  { path: 'tasks', component: TasksListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
