
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef, } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatRadioModule} from '@angular/material/radio';
import { FormBuilder, FormGroup ,FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { UserService } from '../user.service';
import { CommonModule, NgIf } from '@angular/common';@Component({
  selector: 'app-User-add-edit',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule,MatRadioModule, MatDialogModule, MatToolbarModule, MatButtonModule, MatIconModule,MatFormFieldModule,MatInputModule],
  templateUrl: './User-add-edit.component.html',
  styleUrls: ['./User-add-edit.component.css']
})
export class UserAddEditComponent implements OnInit {
[x: string]: any;
  userform : FormGroup;

  constructor(private _fb: FormBuilder, private _userService: UserService, private _matdialogRef: MatDialogRef<UserAddEditComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.userform = this._fb.group({
      id: '',
      name: '',
      email: '',
      password: '',
      role: ''
    });
  }

  onFormSubmit(){
    if (this.userform.valid) {
      if (this.data) {
        this._userService.updateUser(this.data.id,this.userform.value).subscribe({
          next : (val:any) => {
          
            alert('User updated successfully');
             this._matdialogRef.close(true);
            
          },
          error : (err :any) => {
            console.log('error');
          }
        });
      }
      else {
      this._userService.addUser(this.userform.value).subscribe({
        next : (val:any) => {

       alert('User added successfully');
       this._matdialogRef.close(true);
    },
    error : (err :any) => {
      console.log('error');
      }
  });}
    }
  }

  show()
  {
    if (this.data)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

 

  ngOnInit() {
    this.userform.patchValue(this.data);
  }

}

