import { Component } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';


import {
  FormArray,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../public/footer/footer.component';

@Component({
  selector: 'app-soumettre-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
    FooterComponent,
  ],
  templateUrl: './soumettre-form.component.html',
  styleUrl: './soumettre-form.component.css',
})
export class SoumettreFormComponent {
  profileForm = this.fb.group({
    fichier: new FormControl(),
    aliases: this.fb.array([this.fb.control('')]),
  });

  aliasCount: number = 1;

  // progress = 0;

  // file:any;

  selectedFile: any;
  nomFichier!: string;

  constructor(private fb: FormBuilder) {}

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    if (this.aliasCount <= 5) {
      this.aliases.push(this.fb.control(''));
      this.aliasCount +=1;
    }
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
    this.nomFichier = this.selectedFile.name;
    this.getBase64(this.selectedFile);
  }

  getBase64(file: File) {
    var reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      this.profileForm.value.fichier = reader.result;
      if (
        this.profileForm.value.fichier.includes('data:application/pdf;base64')
      ) {
        console.log(true);
      }

      console.log(this.profileForm.value.fichier);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  // scanFile(file: File): Promise<string> {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       const result = reader.result as string;
  //       resolve(result);
  //     };
  //     reader.onerror = reject;
  //     reader.onprogress = (event: ProgressEvent) => {
  //       if (event.lengthComputable) {
  //         const progress = (event.loaded / event.total) * 100;
  //         console.log(`Progress: ${progress}%`);
  //       }
  //     };
  //     reader.readAsText(file);
  //   });
  // }

  // onSubmit() {
  //   if (this.file) {
  //     this.scanFile(this.file).then(
  //       result => {
  //         console.log(result);
  //       },
  //       error => {
  //         console.error(error);
  //       }
  //     );
  //   }
  // }

  // onFileChange(event: any) {
  //   this.file = event.target.files[0];
  // }
}
