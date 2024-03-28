import { Component } from '@angular/core';

import { Caroussel2Component } from '../../frame/caroussel2/caroussel2.component';
import { RemehbsConferenceComponent } from '../remehbs-conference/remehbs-conference.component';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-journee-remehbs',
  standalone: true,
  imports: [Caroussel2Component,RemehbsConferenceComponent,CommonModule],
  templateUrl: './journee-remehbs.component.html',
  styleUrl: './journee-remehbs.component.css'
})
export class JourneeRemehbsComponent {

  items = Array.from({length: 88}, (_, i) => `Item ${i + 1}`);
  limit = 10;

  loadMore() {
    this.limit += 10;
  }
}
