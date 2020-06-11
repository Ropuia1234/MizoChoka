import { Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { EiturBuatsaihDanComponent } from './app/EiturBuatsaihDan/EiturBuatsaihDan.component';
import { AuthGuard } from './app/_guards/auth.guard';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent, },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'EiturBuatsaihDan', component: EiturBuatsaihDanComponent},
        ]
    },
      {path: '**', redirectTo: 'home', pathMatch: 'full'},
];