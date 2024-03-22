import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import {MatIconModule} from '@angular/material/icon';

import { NavBarComponent } from './public/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,NavBarComponent,MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reseauMereEnfant';
}
