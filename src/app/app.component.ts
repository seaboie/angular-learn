import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReceiptComponent } from "./components/receipt/receipt.component";

@Component({
  selector: 'app-root',
  imports: [ReceiptComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
