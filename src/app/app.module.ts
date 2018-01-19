import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ListingsComponent } from './listings/listings.component';
import { IndexcomponentComponent } from './indexcomponent/indexcomponent.component';

const appRoutes: Routes = [
  { path: 'listing', component: ListingsComponent },
  { path: 'home', component: IndexcomponentComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  declarations: [
    AppComponent,
    ListingsComponent,
    IndexcomponentComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
        appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
