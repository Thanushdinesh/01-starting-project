import { Component } from '@angular/core';
// import { LoginComponent } from './login/login.component'; 
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy_users';
import { identifierName } from '@angular/compiler';
import { TasksComponent } from './tasks/tasks.component';
import { ProgressComponent } from './progress/progress.component';
import { Header1Component } from './header1/header1.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent,TasksComponent,ProgressComponent,Header1Component],     
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser(){
    return this.users.find((user)=>user.id === this.selectedUserId)!;
  }

  onSelectUser(id:string){
    this.selectedUserId = id;
    // console.log('selected user with id '+ id);
  }
}


