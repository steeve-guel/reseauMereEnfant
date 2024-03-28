import { afterRender, Component } from '@angular/core';

@Component({
  selector: 'app-caroussel2',
  standalone: true,
  imports: [],
  templateUrl: './caroussel2.component.html',
  styleUrl: './caroussel2.component.css',
})
export class Caroussel2Component {
  constructor() {
    afterRender(() => {
      this.showSlides();
    });
  }

  showSlides() {
    let carouselItems = document.querySelectorAll(
      '.carousel_item'
    ) as NodeListOf<HTMLElement>;
    let i = 1;

    setInterval(() => {
      // Accessing All the carousel Items
      Array.from(carouselItems).forEach((item, index) => {
        if (i < carouselItems.length) {
          item.style.transform = `translateX(-${i * 100}%)`;
        }
      });

      if (i < carouselItems.length) {
        i++;
      } else {
        i = 0;
      }
    }, 2000);
  }
}
