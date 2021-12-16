
import { Person } from './../Person';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonRepoService } from '../services/person-repo.service';

@Component({
  selector: 'app-all-member',
  templateUrl: './all-member.component.html',
  styleUrls: ['./all-member.component.css']
})
export class AllMember implements OnInit {
  people: Person[] = [];
  memberdata: any;
  loading = false;
  error = false;
  constructor(private _router: Router, private personrepo: PersonRepoService) {
    this.allPeople();
  }
  allPeople() {

    const observer$ = this.personrepo.getAllMembers();
    const loading$ = observer$[0];
    const memberData$ = observer$[1];
    const error$ = observer$[2];
    memberData$.subscribe(data => {
      this.people = data;
      console.log(data);

    });
    loading$.subscribe(data => {
      this.loading = data;
      console.log(data);

    });
    error$.subscribe(data => {
      this.error = data;
      console.log(data);

    });
  }
  clickimg(arg: any) {
    this._router.navigateByUrl(`member-details/${arg}`)
  }
  ngOnInit(): void {
  }

}
