import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  widthData: string = '50px';


  changeWidth() {
    this.widthData === '50px' ? this.widthData = '160px' : this.widthData = '50px';
  }

}
