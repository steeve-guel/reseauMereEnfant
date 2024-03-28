import { Component } from '@angular/core';

import { NavBarComponent } from '../nav-bar/nav-bar.component';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-remehbs',
  standalone: true,
  imports: [
    NavBarComponent,
    RouterOutlet,
    RouterLink,
    MatIconModule,
   
  ],
  templateUrl: './remehbs.component.html',
  styleUrl: './remehbs.component.css',
})
export class RemehbsComponent {}
