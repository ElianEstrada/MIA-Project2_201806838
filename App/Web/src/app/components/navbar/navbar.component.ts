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
      link: '/goodaction',
      name: "Good Actions"
    },
    {
      link: '/products',
      name: "Products"
    },
    {
      link: '/profiles',
      name: "Profiles"
    },
    {
      link: '/reports',
      name: "Reports"
    }
  ]

  childs = [
    {
      link: '/child/goodaction',
      name: "Good Actions"
    },
    {
      link: '/letter',
      name: "Letters"
    },
    {
      link: '/post',
      name: "Santa Activity"
    },
    {
      link: '#!',
      name: "Messenger Service"
    }
  ]

  logout(){
    localStorage.clear();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
