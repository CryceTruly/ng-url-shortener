import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StatsComponent } from './components/stats/stats.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ShortenFormComponent } from './components/shorten-form/shorten-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from 'ngx-clipboard';
import { LinkComponent } from './components/link/link.component';

const appRoutes: Routes = [
{ path: 'stats', component: StatsComponent, data: { title: 'statistics' } },
{ path: '', component: HomeComponent, data: { title: 'welcome' } },
{ path: '**', component: NotFoundComponent }
];

@NgModule({
declarations: [
  AppComponent,
  StatsComponent,
  HomeComponent,
  NotFoundComponent,
  NavBarComponent,
  ShortenFormComponent,
  LinkComponent
	],
imports: [
  BrowserModule.withServerTransition({ appId: 'serverApp' }),
  RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  ),
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  ClipboardModule
],
providers: [],
bootstrap: [ AppComponent ]
})
export class AppModule {}
