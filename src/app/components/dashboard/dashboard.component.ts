import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserInfoDialogComponent } from 'src/app/dialogs/user-info-dialog/user-info-dialog.component';
import { UserInterface } from 'src/app/interfaces/user-interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userList:UserInterface[]=[];
  constructor(
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {

  }

  ngOnInit() {
    this.getuserData()
  }

  getuserData() {
    this.authService.userList().subscribe({
      next:(res:UserInterface[])=>{
        if(res && res.length>0){
          this.userList = res;
        }
      }
    })
  }

  deleteUser(id:string){
    // this.authService.deleteUser(id).subscribe({
    //   next:(res)=>{
    //     this.getuserData()
    //   }
    // })
  }

  openUserInfo(id:string){
        this.dialog.open(UserInfoDialogComponent, {
      width: '400px',
      data: id
    });
  }

}
