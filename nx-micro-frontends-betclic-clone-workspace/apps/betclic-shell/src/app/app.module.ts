import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          outlet: 'betclicNavbar',
          loadChildren: () =>
            loadRemoteModule({
              remoteEntry: 'http://localhost:4201/remoteEntry.js',
              remoteName: 'betclicNavbar',
              exposedModule: './Module',
            }).then((m) => m.AppModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
