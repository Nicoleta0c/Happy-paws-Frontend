import { Component, ViewChild, ElementRef } from '@angular/core';
export {}; declare global { interface Window { Calendly: any; } };

@Component({
  selector: 'app-calendary',
  templateUrl: './calendary.component.html',
  styleUrls: ['./calendary.component.css']
})
export class CalendaryComponent {

  ngOnInit() {
    window.Calendly.initInlineWidget({
      url: 'https://calendly.com/veterinaria-happy-paws/cita-mascota',
      parentElement: document.querySelector('.calendly-inline-widget'),
    });

  }
}