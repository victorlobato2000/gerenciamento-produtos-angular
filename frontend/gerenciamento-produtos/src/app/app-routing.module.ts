import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarProdutoComponent } from './components/produto/criar-produto/criar-produto.component';
import { HomeComponent } from './views/home/home.component';
import { ProdutosCrudComponent } from './views/produtos-crud/produtos-crud.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },{
    path: "produtos",
    component: ProdutosCrudComponent
  },{
    path: "produtos/criar",
    component: CriarProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
