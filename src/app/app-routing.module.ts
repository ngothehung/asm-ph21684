import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
const routes: Routes = [
  { path: "", component: HomePageComponent },
  {
    path: "admin", component: AdminLayoutComponent, children: [
      { path: "product/add", component: ProductAddComponent},
      { path: "product/:id/edit", component: ProductEditComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
