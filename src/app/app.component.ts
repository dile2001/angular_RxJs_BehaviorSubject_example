import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
const SNOWMAN_IMAGE = '..\\assets\\icons\\snowman image.jpg';
const SUN_IMAGE = '..\\assets\\icons\\sun.jpg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  inputTemperature = 0;
  imageSrc = SUN_IMAGE;
  temperatureSubject$ = new BehaviorSubject<number>(72);
  //$ suffix is a convention to indicate the variable is observable
  ngOnInit() {
    this.temperatureSubject$.subscribe((temperature) => {
      this.imageSrc = temperature >= 40 ? SUN_IMAGE : SNOWMAN_IMAGE;
    })
  }

  setTemperature() {
    this.temperatureSubject$.next(this.inputTemperature);
  }

  setInputTemperature(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    this.inputTemperature = parseInt(input);
  }
}
