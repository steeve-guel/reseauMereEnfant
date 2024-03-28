import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-remehbs-conference',
  standalone: true,
  imports: [CommonModule,MatButtonModule],
  templateUrl: './remehbs-conference.component.html',
  styleUrl: './remehbs-conference.component.css',
})
export class RemehbsConferenceComponent {
  dataSource: pdfConference[] = ELEMENT_DATA;
  limit:number=1;
  loadMore() {
    this.limit += 1;
  }
}

export interface pdfConference {
  categorie: string;
  listePdf: {
    nomDocument: string;
    taille: string;
    datePublication?: string;
    lien?: string;
    auteur: string;
  }[];
}

const ELEMENT_DATA: pdfConference[] = [
  {
    categorie: 'Session 1  Urgences sanitaires et défis',
    listePdf: [
      {
        nomDocument: 'CO1 Expérience AV CN 24-09-2023 VF_084931',
        taille: '2mb',
        datePublication: '29-09-2023',
        lien: '...',
        auteur: 'BANDE Moumouni',
      },
      {
        nomDocument:
          'Communication tele-anathomopathologie en situation de crise socio-sanitaire',
        taille: '1.07mb',
        datePublication: '29-09-2023',
        lien: '...',
        auteur: 'BANDE Moumouni',
      },
      {
        nomDocument: 'VACCIN HPV',
        taille: '1.07mb',
        datePublication: '29-09-2023',
        lien: '...',
        auteur: 'OUEDRAOGO Paul',
      },
      {
        nomDocument:
          'Communication tele-anathomopathologie en situation de crise socio-sanitaire',
        taille: '1.07mb',
        datePublication: '29-09-2023',
        lien: '...',
        auteur: 'BANDE Moumouni',
      },
      {
        nomDocument: 'Statut vaccinal des enfants ',
        taille: '1.07mb',
        datePublication: '29-09-2023',
        lien: '...',
        auteur: 'Kalmogho Angèle',
      },
      {
        nomDocument: 'Statut vaccinal des enfants ',
        taille: '1.07mb',
        datePublication: '29-09-2023',
        lien: '...',
        auteur: 'Kalmogho Angèle',
      },
    ],
  },
  {
    categorie: 'Session 2  Soins obstétricaux et néonatals',
    listePdf: [
      {
        nomDocument:
          'Accouchement instrumental à l’Hopital Hangadoumbo Moulaye Touré de Gao',
        taille: '2mb',
        datePublication: '29-09-2023',
        lien: '...',
        auteur: 'BANDE Moumouni',
      },
      {
        nomDocument:
          'Communication tele-anathomopathologie en situation de crise socio-sanitaire',
        taille: '1.07mb',
        datePublication: '29-09-2023',
        lien: '...',
        auteur: 'BANDE Moumouni',
      },
      {
        nomDocument: 'VACCIN HPV',
        taille: '1.07mb',
        datePublication: '29-09-2023',
        lien: '...',
        auteur: 'OUEDRAOGO Paul',
      },
      {
        nomDocument:
          'Communication tele-anathomopathologie en situation de crise socio-sanitaire',
        taille: '1.07mb',
        datePublication: '29-09-2023',
        lien: '...',
        auteur: 'BANDE Moumouni',
      },
      {
        nomDocument: 'Statut vaccinal des enfants ',
        taille: '1.07mb',
        datePublication: '29-09-2023',
        lien: '...',
        auteur: 'Kalmogho Angèle',
      },
      {
        nomDocument: 'Statut vaccinal des enfants ',
        taille: '1.07mb',
        datePublication: '29-09-2023',
        lien: '...',
        auteur: 'Kalmogho Angèle',
      },
    ],
  },
];
