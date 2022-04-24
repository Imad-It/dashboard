import { MessagesComponent } from './components/messages/messages.component';
import { HomeComponent } from './components/home/home.component';
import { ChartsComponent } from './components/charts/charts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './components/messages/new/new.component';
import { SentComponent } from './components/messages/sent/sent.component';
import { InboxComponent } from './components/messages/inbox/inbox.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'charts', component: ChartsComponent },
  {
    path: 'messages', component: MessagesComponent, children: [
      { path: 'new', component: NewComponent },
      { path: 'sent', component: SentComponent },
      { path: 'inbox', component: InboxComponent },
      { path: '', redirectTo: 'inbox', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
