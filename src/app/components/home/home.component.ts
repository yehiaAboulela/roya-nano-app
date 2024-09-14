import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import AOS from 'aos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({
      duration: 1200,
    });
  }
}
