import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComprarComponent } from './pages/comprar/comprar.component';
import { CriadoresComponent } from './pages/criadores/criadores.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },           
    { path: 'comprar', component: ComprarComponent }, 
    { path: 'criadores', component: CriadoresComponent }
];
