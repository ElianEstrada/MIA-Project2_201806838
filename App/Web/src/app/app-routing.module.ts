import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import { LoginComponent } from './components/login/login.component'
import { SigninComponent } from './components/signin/signin.component'
import { PrincipalComponent } from './components/principal/principal.component';
import { BulkloadComponent } from './components/bulkload/bulkload.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
