import { MainComponent } from '../main/main.component';
import { UsersComponent } from '../users/users.component';
import { IndexComponent } from './../index/index.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { title: 'About', path: 'About', component: AboutComponent },
  { title: 'Noor-e-Bilal', path: '', component: MainComponent },
  { title: 'Contact', path: 'Contact', component: ContactComponent },

  { title: 'All Users', path: 'Users', component: UsersComponent },
  { title: '404-Not Found', path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
