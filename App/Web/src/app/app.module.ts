import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';

import { LoginService } from './services/login/login.service';
import { SigninComponent } from './components/signin/signin.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SigninComponent,
    PrincipalComponent,
    BulkloadComponent,
    ProductsComponent,
    ProfilesComponent,
    GoodactionComponent,
    ReportsComponent,
    HomechildComponent,
    ActionchildComponent,
    LetterComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
