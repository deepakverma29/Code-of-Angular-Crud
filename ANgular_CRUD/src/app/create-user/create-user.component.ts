import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  userId: number = 0;
  user: any = {
    Id: 0,
    Name: '',
    Email: '',
    Gender: '1',
    Mobile: '',
    DepartmentId: 0,
    Address: '',
  };
  gender = '1';
  departments: any[] = [];
  isVisible = false;
  message = '';
  isVisibleError = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.userId = +this.route.snapshot.params['Id'];
    this.getDepartment();
    this.BindEditUser();
  }

  getDepartment() {
    this.userService.getDepartList().subscribe((data) => {
      this.departments = data;
    });
  }

  BindEditUser() {
    this.userService.getUserById(this.userId).subscribe((data) => {
      this.user = {
        Id: this.userId,
        Name: data.Name,
        Email: data.Email,
        Gender: data.Gender.toString(),
        Mobile: data.Mobile,
        DepartmentId: data.DepartmentId,
        Address: data.Address,
      };
    });
  }

  submit(userForm: NgForm) {
    console.log(userForm);

    if (this.userId > 0) {
      this.user = {
        Id:this.userId,
        Name: userForm.value.name,
        Email: userForm.value.email,
        Mobile: userForm.value.mobile,
        Address: userForm.value.address,
        Gender: userForm.value.gender,
        DepartmentId: userForm.value.department,
      };
      this.userService.updateUser(this.userId,this.user).subscribe(data=>{
        if(this.userId==data.Id){
          this.message = 'user updated successfully!';
          this.isVisible = true;
          setTimeout(() => {
            this.router.navigate(["/"]);
          }, 4000);

        }else{
          this.message = 'something went wrong !';
          this.isVisibleError = true;
        }
      })
    } else {
      this.user = {
        Name: userForm.value.name,
        Email: userForm.value.email,
        Mobile: userForm.value.mobile,
        Address: userForm.value.address,
        Gender: userForm.value.gender,
        DepartmentId: userForm.value.department,
      };

      this.userService.postUser(this.user).subscribe((res) => {
        if (res.Id > 0) {
          //console.log('user added successfully !');
          this.message = 'user added successfully!';
          this.isVisible = true;
        } else {
          //console.log('something went wrong !');
          this.message = 'something went wrong !';
          this.isVisibleError = true;
        }
      });
    }
  }
}
