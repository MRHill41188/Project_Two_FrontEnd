import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  onLogOut(event) {

    this.userService.logout().subscribe(data => {

      this.router.navigate(['']); //defaults to login
    },
    error => {
      const test = 0;
    });

    event.preventDefault();
  }
}
