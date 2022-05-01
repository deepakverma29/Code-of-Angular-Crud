import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.scss']
})
export class DeletePopupComponent implements OnInit {

  @Output() afterDeleteEvent = new EventEmitter();
 @Input() message:any={};
  resultMessage:any={};
 constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  NOAction(){
    this.message=undefined;
  }
  delete(){
   console.log(this.message.id);
   this.userService.deleteUser(+this.message.id).subscribe(data=>{
      if(this.message.id==data.Id){
       this.resultMessage={status:true,message: data.Name +' deleted successfully !'}
      }else{
        this.resultMessage={status:false,message: data.Name +' not deleted, something went wrong !'}
      }
      this.afterDeleteEvent.emit(this.resultMessage);
      this.message=undefined;
   });
  }
}
