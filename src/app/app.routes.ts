import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { DetailsComponent } from './details/details.component';
import { GestionComponent } from './gestion/gestion.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'auth', component: AuthComponent },
    { path: 'inscription', component: InscriptionComponent },
    { path: 'details', component: DetailsComponent },
    { path: 'gestion', component: GestionComponent },
    { path: '**', component: PageNotFoundComponent }
];
