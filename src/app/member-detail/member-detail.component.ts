import { ApiService } from './../services/api.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonRepoService } from '../services/person-repo.service';
import { Person } from '../Person';


@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetail implements OnInit {
  ids: any;
  arr: any = [];
  msg: any = [];
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });

  people: Person[] = [];
  loading = false;
  error = false;
  myImage: any;
  constructor(private router: Router, private route: ActivatedRoute, private apiService: ApiService, private personrepo: PersonRepoService) {
    this.route.params.subscribe((uid) => {
      this.ids = uid;
    })
  }

  trackByFn(index: any, item: any) {
    return index;
  }
  adminFormData() {
    console.log(this.form.value);
    this.apiService.updateMember(this.ids.id, this.form.value).subscribe((result) => {
      this.msg = result
      window.alert(this.msg.message);
      this.router.navigate(['']);
    })
  }




  ngOnInit(): void {

    console.log(this.arr.name);

    const observer$ = this.personrepo.getAllMembers();
    const loading$ = observer$[0];
    const memberData$ = observer$[1];
    const error$ = observer$[2];
    memberData$.subscribe(data => {
      this.people = data;
      for (const _id of this.people) {
        if (this.ids.id == _id._id) {
          this.arr = [_id];
          console.log(_id);
          this.form = new FormGroup({
            name: new FormControl(_id.name ? _id.name : null, [Validators.required]),
            email: new FormControl(_id.email ? _id.email : null, [Validators.required]),
            country: new FormControl(_id.country ? _id.country : null, [Validators.required]),
            address: new FormControl(_id.address ? _id.address : null, [Validators.required]),
          });
          this.myImage = _id.image
        }
      }

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
}
