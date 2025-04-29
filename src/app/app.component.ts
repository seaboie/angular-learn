import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'Event Binding';

  // Method
  buttonClick() {
    alert('Button has been clicked ...');
  }

  keyEnter(event: KeyboardEvent) {
    const eventDetail = {
      key: event.key,
      code: event.code,
      ctrlKey: event.ctrlKey,
      shiftKey: event.shiftKey,
      altKey: event.altKey,
      metaKey: event.metaKey,
      type: event.type,
    };
    alert('Pressed key : Enter Enter Enter' + JSON.stringify(eventDetail, null, 2));
    console.log(event);
  }

  keyUpEntering() {
    console.log('Keyup Entering');
    
  }
}
