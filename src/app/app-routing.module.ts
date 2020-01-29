import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },

  { path: 'connexion',  loadChildren: () => import('./connexion/connexion.module').then(m => m.ConnexionPageModule)},
  { path: 'partenaire/ajout-part', loadChildren: './ajout-part/ajout-part.module#AjoutPartPageModule' },
  { path: 'transaction', loadChildren: './transaction/transaction.module#TransactionPageModule' },
  { path: 'partenaire/ajout-user', loadChildren: './ajout-user/ajout-user.module#AjoutUserPageModule' },
  { path: 'liste-transactions', loadChildren: './liste-transactions/liste-transactions.module#ListeTransactionsPageModule' },
  { path: 'vide', loadChildren: './vide/vide.module#VidePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
