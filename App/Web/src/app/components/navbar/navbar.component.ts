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

  noUser = [
    {
      link: '/login',
      name: "Login"
    },
    {
      link: '/signin',
      name: "Sign In"
    }
  ]

  admins = [
    {
      link: '/bulkload',
      name: "Bulk Load"
    },
    {
      link: '#',
      name: "Good Actions"
    },
    {
      link: '#',
      name: "Products"
    },
    {
      link: '#',
      name: "Profiles"
    },
    {
      link: '#',
      name: "Reports"
    }
  ]

  logout(){
    localStorage.clear();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
