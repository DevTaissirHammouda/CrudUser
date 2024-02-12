import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialog, MatDialogModule, } from '@angular/material/dialog';
import { UserAddEditComponent } from './User-add-edit/User-add-edit.component';
import { UserService } from './user.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'role','action'];
   dataSource !: MatTableDataSource<any>;
   @ViewChild(MatSort) sort: any;
   @ViewChild(MatPaginator) paginator: any;
  title = 'CrudUser';
  constructor( private _dialog: MatDialog,private _userService :UserService) {}
allUsers:any = {};
  getUsersList(){
   
      this._userService.getUsers().subscribe({
        next : (res) => {

this.dataSource  =new MatTableDataSource(res);
this.dataSource.sort = this.sort;
this.dataSource.paginator = this.paginator;
   },
    error : (err ) => {
      console.log(err);
    }
  });
    }

deleteUser(id : any){
  this._userService.deleteUser(id).subscribe({
    next : (res) => {
      alert('User deleted successfully');
      this.getUsersList();
    },
    error : (err) => {
      console.log(err);
    }
  });
}



    openAddEditForm() {
   const DialogRef= this._dialog.open(UserAddEditComponent);
   DialogRef.afterClosed().subscribe({
    next :(val) => {
      if(val){
        this.getUsersList();
      }
    }
  }
  );
  }
  openEditForm(data :any) {
    const DialogRef= this._dialog.open(UserAddEditComponent,{
     data
     
     });
    DialogRef.afterClosed().subscribe({
      next :(val) => {
        if(val){
          this.getUsersList();
        }
      }
    }
    );
   }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if(this.dataSource.paginator)
    {
      this.dataSource.paginator.firstPage();
    }
  }

ngOnInit(): void {
 
  this.getUsersList();
}

  }
  




