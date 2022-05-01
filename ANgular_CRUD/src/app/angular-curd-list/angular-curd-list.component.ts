import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-angular-curd-list',
  templateUrl: './angular-curd-list.component.html',
  styleUrls: ['./angular-curd-list.component.scss'],
})
export class AngularCurdListComponent implements OnInit {
  message: any;
  userList: any[] = [];
  isVisible=false;
  isVisibleError=false;
  messageErrorSuccess:any='';

  constructor(private userservice: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.isVisible=false;
  this.isVisibleError=false;
  this.messageErrorSuccess='';
    this.userservice.getUserList().subscribe((data) => {
      this.userList = data;
    });
  }
  AddUser() {
    this.router.navigate(['createuser']);
  }
  delete(userId: any) {
    this.message = {
      type: 'confirm',
      text: 'Are you sure do you want to delete this user?',
      id: userId,
    };
  }

  afterDelete(data:any){
    if(data.status==true){
      this.isVisible=true;
      this.messageErrorSuccess=data.message;
      setTimeout(() => {
        this.getUsers();
      }, 4000);
    }else{
      this.isVisibleError=true;
      this.messageErrorSuccess=data.message;
    }
  }
}
