import { Component } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {

  registerForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: [''],
      mdp: [''],
      cfMdp: ['']
    })
  }

  handleSubmit() {
    this.router.navigate(['/remehbs/soummettre'])
  }
}
