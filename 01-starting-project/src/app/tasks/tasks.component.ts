import { Component ,Input} from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import {type NewTaskData } from './task/task.model';
import { ProgressComponent } from '../progress/progress.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NewTaskComponent,ProgressComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId!:string;
@Input({required:true}) name!:string;
isAddingTask = false;
tasks = [
  {
    id:'t1',
    userId:'u1',
    title:'Project 1',
    summary:'Uses high-definition cameras or specialized sensors installed at strategic locations to capture real-time video footage of individuals.',
    duedate:'10-12-2024'
  },
  {
    id:'t2',
    userId:'u2',
    title:'Laser Based Perimeter fencing to avoid HEC ',
    summary:'To create an effective deterrent system that prevents elephants from crossing designated perimeters',
    duedate:'10-12-2024'
  },
  {
    id:'t3',
    userId:'u3',
    title:'E-Commerce Website ',
    summary:'An e-commerce website is an online platform that facilitates the buying and selling of goods and services over the internet.',
    duedate:'10-12-2024'
  },
  {
    id:'t4',
    userId:'u4',
    title:'IOT ',
    summary:'Internet of Things ',
    duedate:'10-12-2024'
  }
];
get selectedUserTasks(){
  return this.tasks.filter((tasks)=>tasks.userId==this.userId);
}

onCompleteTask(id:string){
  this.tasks= this.tasks.filter((task)=>task.id!==id);
}
onStartAddTask(){
  this.isAddingTask = true;
}
onCancelAddTask(){
  this.isAddingTask = false;
}
onAddTask(taskData:NewTaskData){
  this.tasks.unshift({
    id:new Date().getTime().toString(),
    userId:this.userId,
    title:taskData.title,
    summary:taskData.summary,
    duedate:taskData.date,
  })
  this.isAddingTask = false;
}
}
