import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infobody',
  templateUrl: './infobody.component.html',
  styleUrls: ['./infobody.component.css']
})

export class InfobodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  id: any = 'create';
	tabChange(ids: any) {
		this.id = ids;
	}}
