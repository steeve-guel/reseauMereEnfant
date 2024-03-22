import { Routes } from '@angular/router';
import { AccueilComponent } from './public/accueil/accueil.component';

export const routes: Routes = [
    {path:'',redirectTo:'remehbs', pathMatch:"full"},  //redirection vers
    {path:'remehbs',component:AccueilComponent}
];
