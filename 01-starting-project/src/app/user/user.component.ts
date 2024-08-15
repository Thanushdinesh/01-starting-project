import { Component,computed,EventEmitter,Input,input,Output,output} from '@angular/core';
import {type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';
// type User = {
//   id:string;
//   name:string;
//   avatar:string;
// }


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user!: User;
  //  @Input({required:true}) avatar!:string;
  //  @Input({required:true}) name!:string;
   @Output() select = new EventEmitter();              //<string>  can be added for generic type difference
  // select=output<string>(); 
  @Input({required:true}) selected!:boolean;                        // same as Output gives acustom event 

   get imagePath(){
    return 'assets/users/' + this.user.avatar;
   }
   
  // avatar=input.required<string>();    //read only
  // name=input.required<string>();
  // imagePath=computed(()=>{
  //   return 'assets/users' + this.avatar();
  // });
  
   onSelectUser(){
    this.select.emit(this.user.id);

   }

}