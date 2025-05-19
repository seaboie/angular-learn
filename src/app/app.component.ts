import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ThaiFormatDateTimePipe } from './pipe/thai-format-date-time/thai-format-date-time.pipe';
import { ThaiFormatDatePipe } from './pipe/thai-format-date/thai-format-date.pipe';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ThaiFormatDatePipe, ThaiFormatDateTimePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  today = new Date();

}
