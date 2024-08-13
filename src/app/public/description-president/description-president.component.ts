import { Component } from '@angular/core';

@Component({
  selector: 'app-description-president',
  standalone: true,
  imports: [],
  templateUrl: './description-president.component.html',
  styleUrl: './description-president.component.css'
})
export class DescriptionPresidentComponent {

  ngOnInit() {
    const textContainer = document.querySelector('.text-container');
    const showMoreBtn = document.querySelector('.show-more-btn');

    showMoreBtn!.addEventListener('click', () => {
      textContainer!.classList.toggle('show-all');
      showMoreBtn!.textContent = textContainer!.classList.contains('show-all') ? 'Afficher moins' : 'Afficher plus';
    });
  }

}
