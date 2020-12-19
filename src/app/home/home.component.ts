import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { home } from '../text/text.translation';
declare var anime: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig],
})
export class HomeComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => 'src/assets/$n.jpg');


  name: string = home.name;
  subtitle: string = home.subtitle;
  presentation: string = home.presentation;
  competences: string = home.competences;
  experiences: string = home.presText.title;
  about = [home.presText.about.about1,
    home.presText.about.about2
  ];
  constructor(config: NgbCarouselConfig) { }

    ngOnInit(): void {
    }
}
