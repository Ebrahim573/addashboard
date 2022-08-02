import { Component, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-associates',
  templateUrl: './associates.component.html',
  styleUrls: ['./associates.component.css']
})
export class AssociatesComponent implements OnInit {
  api: any;

  displayedColumns: string[] = ['id', 'name', 'email', 'mobile'];
  dataSource = new MatTableDataSource;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(private dialog: MatDialog) { }


  ngOnInit(): void {

this.getallasssociates();

    }



  openDialog() {
    this.dialog.open(DialogComponent,{

   });
  }
  getallasssociates(){
    this.api.getasssociates()
    .subscribe({
      next:(res: any)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort= this.sort
      },
     //error(err: any)=>{
      // alert("error while fetching");
      }
    )}
  }




