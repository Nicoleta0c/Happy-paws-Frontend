import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  scrollToElement(elementId: string): void {
    document.getElementById(elementId)!.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
