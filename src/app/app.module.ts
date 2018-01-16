import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ListingsComponent } from './listings/listings.component';

const appRoutes: Routes = [
  { path : 'listing', component: ListingsComponent  }
]

@NgModule({
  declarations: [
    AppComponent,
    ListingsComponent 
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
