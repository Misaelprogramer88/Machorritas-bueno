import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrandonComponent } from './brandon/brandon.component';
import { MisaelComponent } from './misael/misael.component';
import { ValeriaComponent } from './valeria/valeria.component';
import { VetsyComponent } from './vetsy/vetsy.component';
import { PepeComponent } from './pages/pepe/pepe.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'brandon', component: BrandonComponent },
  { path: 'misael', component: MisaelComponent },
  { path: 'valeria', component: ValeriaComponent },
  { path: 'vetsy', component: VetsyComponent },
  { path: 'pepe', component: PepeComponent },
  { path: '**', redirectTo: '' }
];

