import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  profile= [
    {'id': 1, 'name':'Name', 'description':'Jelyn M. Doinog', 'image':'../../assets/img5.jpg'},
    {'id': 2, 'name':'Address', 'description':'Brgy. Mag-aso', 'image':'../../assets/images.jfif'},
    {'id': 3, 'name':'Course', 'description':'Bachelor of Science in Information Technology', 'image':'../../assets/laptop.jfif'},
    {'id': 3, 'name':'School', 'description':'Eastern Visayas State University Carigara-Campus', 'image':'../../assets/school.jfif'},
  ]
}
