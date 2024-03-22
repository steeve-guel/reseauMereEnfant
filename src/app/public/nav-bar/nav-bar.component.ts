import { afterRender, Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  constructor() {
    afterRender(() => {
      window.addEventListener('scroll', () => {
        let header = document.querySelector('.tete') as HTMLElement;

        header.classList.toggle('sticky', window.scrollY > 2);
      });
    });
  }
  menu() {
    let menu = document.querySelector('#menu-icon');
    let navBar = document.querySelector('.nav-bar');

    console.log(menu);

    menu?.classList.toggle('bx-x');
    navBar?.classList.toggle('open');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userProfile');
    window.location.href = '/';
  }
}
