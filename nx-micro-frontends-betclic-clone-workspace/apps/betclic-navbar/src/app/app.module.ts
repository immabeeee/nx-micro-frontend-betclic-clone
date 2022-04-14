import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppBetclicNavbar } from './components/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, AppBetclicNavbar],
  imports: [
    BrowserModule,
    //RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    RouterModule.forChild([
      {
        path: '',
        component: AppComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }