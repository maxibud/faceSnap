import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input () faceSnap!: FaceSnap;
    buttonText!: string;
  
  ngOnInit(): void {

    this.buttonText = 'oh snap';
  }
  onSnap() {
    if (this.buttonText === 'oh snap') {
      this.faceSnap.snaps++;
      this.buttonText = 'oups!';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'oh snap';
    }
    
  }
}
