import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() notUser: boolean;
  @Input() father: boolean;
  @Input() admin: boolean;
  @Input() child: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
