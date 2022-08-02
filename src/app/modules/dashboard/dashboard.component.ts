import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
clientList=[
  {id:1, firstname:'Nayu', lastname:'gorge'},
  {id:2, firstname:'Najumu', lastname:'ge'},
  {id:3, firstname:'Nyu', lastname:'rj'},
  {id:4, firstname:'yuar', lastname:'goge'},
  {id:5, firstname:'Nuan', lastname:'gorge'},
  {id:6, firstname:'lnayu', lastname:'joge'}
];


  constructor() { }

  ngOnInit(): void {
  }

}
