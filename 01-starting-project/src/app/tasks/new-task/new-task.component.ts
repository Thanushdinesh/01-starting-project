import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {type NewTaskData } from '../task/task.model';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule,HeaderComponent],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>()
  @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  enteredCustomerSection='';
  isRequired = true; 

  onCancel(){
    this.cancel.emit();
  }
  onSubmit(){
    this.add.emit({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate,
    });
  }

}