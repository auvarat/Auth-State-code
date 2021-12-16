// import { person, personInfo } from './../Person';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from '../Person';
import { ApiService } from '../services/api.service';
import { PersonRepoService } from '../services/person-repo.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  dataArr: any;
  people: Person[] = [];
  memberdata: any;
  loading = false;
  error = false;
  msg: any = [];
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    image: new FormControl(null, [Validators.required]),
    dob: new FormControl('', [Validators.required]),
  });
  adminFormData() {
    console.log(this.form.value);
    const postData = new FormData();
    postData.append('file', this.form.value.image);
    postData.append('data', JSON.stringify(this.form.value));
    this.person.createMember(postData).subscribe((result) => {
      console.log(result);
      this.msg = result
      window.alert(this.msg.message);
      this.getMemberData();
      this.myImage = '';
      this.form.reset();
      this.form.value.reset();
    });
  }
  trackByFn(index: any, item: any) {
    return index;
  }
  constructor(private personrepo: PersonRepoService, private person: ApiService) {
    this.getMemberData();
  }
  ngOnInit(): void {
  }
  deleteItem(id: any) {
    console.log(id);
    this.person.deleteMember(id).subscribe((data) => {
      this.msg = data
      this.getMemberData();
      window.alert(this.msg.message);
    });
  }
  getMemberData() {

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
      // console.log(data);

    });
    error$.subscribe(data => {
      this.error = data;
      // console.log(data);

    });
  }
  myImage = '';
  pickImage(e: Event) {
    console.log((<HTMLInputElement>e.target).files);
    const fileData = (<HTMLInputElement>e.target).files;

    if (fileData && fileData.length > 0) {
      this.form.patchValue({ image: fileData[0] });
      // optional code to preview image

      const render = new FileReader();
      render.onload = () => {
        this.myImage = render.result as string;
        console.log(this.myImage);
      };
      render.readAsDataURL(fileData[0]);
    }
  }

}
