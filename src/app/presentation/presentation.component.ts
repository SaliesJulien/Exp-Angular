import { Component, OnInit } from '@angular/core';
import { presentation } from '../text/presentation';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

    title: string = presentation.title;
    description: string = presentation.description;


    slides = [{image: '../../assets/pres/IMG_1869.JPG'},
              {image: '../../assets/pres/IMG_1868.JPG'},
              {image: '../../assets/pres/IMG_1865.JPG'},
              {image: '../../assets/pres/IMG_1861.JPG'},
              {image: '../../assets/pres/IMG_1866.JPG'}];

    constructor() { }

    ngOnInit(): void {
    }

}
