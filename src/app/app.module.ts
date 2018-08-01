import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ExploreComponent } from './explore/explore.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { KnowmoreComponent } from './knowmore/knowmore.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UploadComponent } from './upload/upload.component';
import { Explore1Component } from './explore/explore1/explore1.component';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'explore.html', component: ExploreComponent },
  { path: 'knowmore.html', component: KnowmoreComponent },
  { path: 'register.html', component: RegisterComponent },
  { path: 'login.html', component: LoginComponent },
  { path: 'upload.html', component: UploadComponent },
  { path: 'explore1.html', component:Explore1Component}

];


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ExploreComponent,
    KnowmoreComponent,
    LoginComponent,
    RegisterComponent,
    UploadComponent,
    Explore1Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),FormsModule,
    ReactiveFormsModule,
    HttpClientModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
