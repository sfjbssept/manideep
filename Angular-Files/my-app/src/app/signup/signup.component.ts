import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  title = "Smart Mobility"
  typesOfShoes: string[] = ['Login','Sign up','About us'];
  ngOnInit(): void {
  }

}
