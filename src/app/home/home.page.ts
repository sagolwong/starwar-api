import { Component, OnInit } from '@angular/core';
import { StarwarService } from '../services/starwar.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private starwarService:StarwarService
  ) {}
  ngOnInit(){
    this.starwarService.loadPeople(1).subscribe(peoples =>{
      console.log(peoples)
    })
  }

}
