import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'addperson-task-frontend';
  test: any;
  @Input() mytestdata: any;
  constructor(private router: Router) { }

  goRegister() {
    this.router.navigate(['adminlogin']);
  }
  gotoHome() {
    this.router.navigate(['']);
  }
  logout() {
    localStorage.removeItem("token");
    this.router.navigate(['adminlogin']);
  }
  ngOnInit(): void {

  }
}
