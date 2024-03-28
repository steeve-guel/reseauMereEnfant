import { afterRender, Component } from '@angular/core';

import { CarousselComponent } from '../../frame/caroussel/caroussel.component';
import { DescriptionPresidentComponent } from '../description-president/description-president.component';
import { RemehbsDescComponent } from '../remehbs-desc/remehbs-desc.component';
import { EquipeComponent } from '../equipe/equipe.component';
import { FooterComponent } from '../footer/footer.component';


import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    RouterLink,RouterLinkActive,RouterOutlet,
    CarousselComponent,
    DescriptionPresidentComponent,
    RemehbsDescComponent,
    EquipeComponent,
    FooterComponent,
    
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent {}
