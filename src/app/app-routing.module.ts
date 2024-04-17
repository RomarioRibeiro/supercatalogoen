import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './views/catalogo/catalogo.component';
import { HomeComponent } from './views/home/home.component';
import { ContatoComponent } from './views/contato/contato.component';

const routes: Routes = [
  {
    path: 'catalog',
    component: CatalogoComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cantact',
    component: ContatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
