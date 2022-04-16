import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { CardsComponent } from './components/cards/cards.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChartsComponent } from './components/charts/charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarChartsComponent } from './components/charts/bar-charts/bar-charts.component';
import { PieChartsComponent } from './components/charts/pie-charts/pie-charts.component';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    CardsComponent,
    OrdersComponent,
    CustomersComponent,
    DashboardComponent,
    ChartsComponent,
    BarChartsComponent,
    PieChartsComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule, BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
