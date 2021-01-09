import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import { LoginComponent } from './components/login/login.component'
import { SigninComponent } from './components/signin/signin.component'
import { PrincipalComponent } from './components/principal/principal.component';
import { BulkloadComponent } from './components/bulkload/bulkload.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { GoodactionComponent } from './components/goodaction/goodaction.component';
import { ReportsComponent } from './components/reports/reports.component';
import { HomechildComponent } from './components/homechild/homechild.component';
import { ActionchildComponent } from './components/actionchild/actionchild.component';
import { LetterComponent } from './components/letter/letter.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'principal',
    component: PrincipalComponent
  },
  {
    path: 'bulkload',
    component: BulkloadComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'profiles',
    component: ProfilesComponent
  },
  {
    path: 'goodaction',
    component: GoodactionComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'homechild',
    component: HomechildComponent
  },
  {
    path: 'child/goodaction',
    component: ActionchildComponent
  },
  {
    path: 'letter',
    component: LetterComponent
  },
  {
    path: 'post',
    component: PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
