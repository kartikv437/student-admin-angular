import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-info-dialog',
  templateUrl: './user-info-dialog.component.html',
  styleUrls: ['./user-info-dialog.component.scss']
})
export class UserInfoDialogComponent {
  userInfo: any;
constructor(
  @Inject(MAT_DIALOG_DATA) public data: any,
  private authService: AuthService
) {}

ngOnInit(){
  console.log(this.data);
  
this.getUserInfo()
}

getUserInfo(){
  this.authService.userInfo(this.data).subscribe({
    next:(res)=>{
      this.userInfo = res;
    }
  })
}

}
