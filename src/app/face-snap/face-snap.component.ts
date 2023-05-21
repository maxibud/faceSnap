import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  imageUrl!: string;
  snaps!: number;
  
  ngOnInit(): void {
    this.title = 'Ressemble';
    this.description = 'ceChaton',
    this.createdDate = new Date();
    this.imageUrl ='https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.snaps = 5;
  }
}
