import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ 
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    RouterOutlet,
  ],
  templateUrl: './header.component.html',
  styleUrl: 
    './header.component.scss'
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      
  }
}
