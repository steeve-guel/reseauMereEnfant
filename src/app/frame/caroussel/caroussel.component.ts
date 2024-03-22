import { Component } from '@angular/core';

@Component({
  selector: 'app-caroussel',
  standalone: true,
  imports: [],
  templateUrl: './caroussel.component.html',
  styleUrl: './caroussel.component.css'
})
export class CarousselComponent {

  
  ngOnInit(): void {
    this.showSlides();
  }

  showSlides() {
    let carouselItems = document.querySelectorAll('.carousel_item') as NodeListOf<HTMLElement>;
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
