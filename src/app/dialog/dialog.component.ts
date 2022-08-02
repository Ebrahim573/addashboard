import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {


associateForm! : FormGroup

  constructor(private formBuilder:FormBuilder, private api:ApiService, private dialogRef:  MatDialogRef<DialogComponent> ) { }

  ngOnInit(): void {
    this.associateForm=this.formBuilder.group({
      associateid:['',Validators.required],
      associatename:['',Validators.required],
      associatemobile:['',Validators.required],
      associateemail:['',Validators.required]
    })


  }
addassociate(){
console.log(this.associateForm.value);

}

}
